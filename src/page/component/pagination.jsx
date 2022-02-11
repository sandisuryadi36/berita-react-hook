import { useEffect, useState } from "react"

const Pagination = (props) => { 
    let [pageNow, setPageNow] = useState(props.page)

    useEffect(() => { 
        setPageNow(props.page)
    }, [props.page])
    
    const pageHandler = (page) => { 
        setPageNow(page)
        props.changePage(page)
    }

    let prevButton = () => {
        if (pageNow !== 1) {
            return (
                <li className="page-item" onClick={() => pageHandler(pageNow - 1)}>
                    <a className="page-link" href="#prev">Previous</a>
                </li>
            )
        } else {
            return (
                <li className="page-item disabled">
                    <a className="page-link" href="#prev">Previous</a>
                </li>
            )
        }
    }

    let nextButton = () => {
        if ((props.totalResults - (pageNow * 20)) > 0) {
            return (
                <li className="page-item" onClick={() => pageHandler(pageNow + 1)}>
                    <a className="page-link" href="#next">Next</a>
                </li>
            )
        } else {
            return (
                <li className="page-item disabled">
                    <a className="page-link" href="#next">Next</a>
                </li>
            )
        }
    }

    let prevPageNumber = () => {
        let s
        let element = []
        if (pageNow - 2 <= 1) {
            s = 1
        } else s = pageNow - 2
        for (let i = s; i < pageNow; i++) {
            element.push(<li key={i} className="page-item" onClick={() => pageHandler(i)}><a className="page-link" href={`#${i}`}>{i}</a></li>)
        }
        return element
    }

    let nextPageNumber = () => {
        let element = []
        for (let i = pageNow; i < pageNow + 2; i++) {
            if ((props.totalResults - (i * 20)) > 0) {
                element.push(<li key={i + 1} className="page-item"><a className="page-link" href={`#${i + 1}`} onClick={() => pageHandler(i + 1)}>{i + 1}</a></li>)
            }
        }
        return element
    }

    return (
        <nav aria-label="Page navigation" className="container" id="pagination">
            <ul className="pagination pagination-sm justify-content-end">
                {prevButton()}
                {prevPageNumber()}
                <li key={pageNow} className="page-item active"><p className="page-link disabled" >{pageNow}</p></li>
                {nextPageNumber()}
                {nextButton()}
            </ul>
        </nav>
    )
}

export default Pagination