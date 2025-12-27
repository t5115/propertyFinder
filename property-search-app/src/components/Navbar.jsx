import './Navbar.css';
import logo from "../assets/logo.png";

/*Navbar component contains img*/
function Navbar(){
    return (
        <nav className="navbar">
            <img 
            src = {logo}
            alt = "Site Logo"
            className = "navbar-logo"
            />
        </nav>
    );
}

export default Navbar
