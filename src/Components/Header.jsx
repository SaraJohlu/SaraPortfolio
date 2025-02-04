import NeonSign from "./HeaderComponents/NeonSign";
import Navbar from './HeaderComponents/Navbar';

import './HeaderComponents/style/headerstyle.css'
import './style.css'


const Header = () => {

    return(
        <>
        <header className="header-container">
        <NeonSign />
        <Navbar />
        </header>
        </>
    );
}

export default Header