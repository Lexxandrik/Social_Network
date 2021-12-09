
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className='item'>
          <NavLink activeclassname='active' to="/" >Profile</NavLink>
        </div>
        <div className='item'>
          <NavLink to="/contact/">Messages</NavLink>
        </div>
        <div>News</div>
        <div>Music</div>
        <div>...</div>
      </nav>
    </div>
  );
};

export default Navbar;
