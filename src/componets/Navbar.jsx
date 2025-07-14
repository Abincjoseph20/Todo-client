// Navbar.js
import { Link } from "react-router-dom";
import '../pages/style.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/'>Add Todo</Link>    
            <Link to='/list'>Todo List</Link>    
        </nav>
    );
}

export default Navbar;