const Navbar = (props) => { 
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
                        <li className="nav-item active">
                            <a className="nav-link" href="#general" onClick={() => props.category("general")} >General</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#business" onClick={() => props.category("business")} >Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#entertainment" onClick={() => props.category("entertainment")} >Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#health" onClick={() => props.category("health")} >Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#science" onClick={() => props.category("science")} >Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sports" onClick={() => props.category("sports")} >Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#technology" onClick={() => props.category("technology")} >Technology</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;