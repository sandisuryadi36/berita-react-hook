import { useState } from "react";

const Navbar = (props) => {
    let [category, setCategory] = useState("general");
    let categotyList = [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology"
    ]

    const categoryHandler = (category) => {
        setCategory(category);
        props.category(category);
    }

    const ShowMenuList = () => {
        let element = categotyList.map((item, index) => {
            if (item === category) {
                return (
                    <li key={index} className="nav-item" onClick={() => categoryHandler(item)}>
                        <a className="nav-link active" href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                    </li>
                )
            } else { 
                return (<li key={index} className="nav-item" onClick={() => categoryHandler(item)}>
                    <a className="nav-link" href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                </li>)
            }
        })
        return element
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="./">News Portal</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <ShowMenuList />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;