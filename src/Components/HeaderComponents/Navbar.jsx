import { useState, useEffect, useRef } from "react"; // Import react hooks 
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom"

import './style/Navbar.css'
import '../../mediaQ.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // Boolean på false för att kunna använda dropdown navigationen
  const navRef = useRef(null);

// useEffect with function click to set toggle to true if false and toggle to false if true. 
//useRef to set the navRef to null, do not re-render the intial value
  useEffect(() => { 
    const click = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)){
        setToggle(false);
    }
  };

// Implement element when mouse clicks on toggle and remove element if mouse click somewhere outside toggle
  if(toggle) {
    document.addEventListener("mousedown", click)
  } else {
    document.removeEventListener("mousedown", click)
  }
  return() => document.removeEventListener("mousedown", click);
}, [toggle]);

   return(
    <>
    {/* reference navRef to sett initial value to null for the nav menu */}
    <nav className="dropdown-container" ref={navRef}>
      {/* aria-expanded makes the broswer userfriendly and also tells if the dropdown menu is toggled or not */}
      <button className="dropdown-button" onClick={() => setToggle(!toggle)} aria-expanded={toggle}> 
        <p className="menu-p"><FiMenu className="menu-icon" /></p> 
      </button>
 
      {toggle && ( // drop-container on show or not show depending on the value true or false 
             <ul className={toggle ? "drop-container show" : "drop-container"}  role="menu">
                    <li className="drop-list"><Link to="/home" className="drop-link1">Home</Link></li>
                    <li className="drop-list"><Link to="/about" className="drop-link2">About Me</Link></li>
                    <li className="drop-list"><Link to="/pnc" className="drop-link3">Projects and Contact</Link></li>
                </ul>
      )}

    </nav>
  </>
   );
}

export default Navbar