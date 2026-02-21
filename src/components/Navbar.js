import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Jobify</h2>
      <div>
        <Link to="/">Home</Link>
        
      </div>
    </div>
  );
}

export default Navbar;