import { BiMailSend } from "react-icons/bi";
import '../style.css'

const Mail = () => {

    return(

        <>
         <section className="mail-container">
        <h2>For direct contact, press the button below and send me a mail</h2>
        <a href="mailto:SaraJohlu@outlook.com">
        <button><BiMailSend /></button>
        </a>
        </section>
        </>
    );
}

export default Mail