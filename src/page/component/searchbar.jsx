import { useState } from "react";

const SearchBar = (props) => { 
    let [search, setSearch] = useState("")
    let [liveState, setLiveState] = useState(false);

    let timer = null

    const searchHandler = (event) => { 
        if (liveState) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                setSearch(event.target.value)
                props.searchQuery(search)
            }, 500)
        } else {
            setSearch(event.target.value);
        }
    }

    // useEffect(() => {
    //     props.searchQuery(search)
    // }, [search])

    const pressEnter = (event) => { 
        if (event.keyCode === 13) {
            event.preventDefault();
            props.searchQuery(search)
        }
    }

    const searchClick = () => { 
        props.searchQuery(search)
    }

    const LiveStateHandler = (checked) => { 
        setLiveState(checked)
    }

    return (
        <form className="container" id="search-form">
            <div className="d-flex my-2">
                <input className="form-control me-sm-2" type="text" placeholder="Search" onKeyDown={pressEnter} onChange={searchHandler} ref={props.searchRef} />
                <input className="btn btn-outline-success my-2 my-sm-0" type="button" value="Search" onClick={searchClick} ></input>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" onChange={event => LiveStateHandler(event.target.checked)} checked={liveState} />
                <label className="form-check-label">Live search</label>
            </div>
        </form>
    )
}

export default SearchBar;