import { useState, useEffect, useRef } from "react"; // Importerar useState hook för dropdown meny
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom"

import './style/Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false); // Boolean på false för att kunna använda dropdown navigationen
  const navRef = useRef(null);


  useEffect(() => {
    const click = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)){
        setToggle(false);

    }
  };

  if(toggle) {
    document.addEventListener("mousedown", click)
  } else {
    document.removeEventListener("mousedown", click)
  }
  return() => document.removeEventListener("mousedown", click);
}, [toggle]);

   return(
    <>
    <nav className="dropdown-container" ref={navRef}>
      {/* aria-expanded gör det mer användarvänligt i webbläsaren, berättar ifall dropdown menyn är stängd eller inte */}
      <button className="dropdown-button" onClick={() => setToggle(!toggle)} aria-expanded={toggle}> 
        <p className="menu-p"><FiMenu className="menu-icon" /></p> 
      </button>
 
      {toggle && (
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