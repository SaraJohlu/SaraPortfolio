import FooterLines from "./FooterComponents/FooterLines" 
import "./../App.css"
import './style.css'
import './FooterComponents/style/footercomponents.css'



const Footer = () => {

    return(
        <>
    
        <FooterLines />
        <p className="copywright"> ©  Sara Johnson Lundén</p>
        </>
    );
};

export default Footer