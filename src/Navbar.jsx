import {Link} from "react-router-dom";

export default function Navbar(){
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/terms">
                Terminos
                </Link>
            </li>
            </ul>
        </div>
    </div>
</nav>

    );
}