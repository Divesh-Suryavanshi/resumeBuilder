import {Link} from "react-router-dom"

export const NavBar = (props) => {

    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AboutUs" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ContactUs" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
