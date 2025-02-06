import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Mail from './Mail'

import '../style.css'


const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <h2>Contact</h2>

        <article className="contact-links">
          <a href="">
          <FaInstagramSquare />

          </a>

          <a href="https://github.com/SaraJohlu">
          <FaGithubSquare />
          </a>

          <a href="https://www.linkedin.com/in/sara-johnson-lund%C3%A9n-6a6948325///">
            <FaLinkedin />
          </a>
        </article>

        <Mail />
      </section>
    </>
  );
};

export default Contact;
