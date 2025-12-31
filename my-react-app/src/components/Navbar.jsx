import { Link } from "react-router-dom"; 
import './Navbar.css';
import logo from "../assets/logo.png";

/*Navbar component contains img*/
function Navbar(){
    return (
        <nav className="navbar">
           <Link to="/">
                <img 
                    src={logo}
                    alt="Site Logo"
                    className="navbar-logo"
                />
            </Link>
        </nav>
    );
}

export default Navbar
