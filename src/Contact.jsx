import { BiMailSend } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
      <h1>Contact</h1>
      <ul>
        <a href="#">
          <FaInstagramSquare />
        </a>
        <a href="#">
          <FaGithubSquare />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </ul>

      <article>
        <h2>For faster contact, please mail me. </h2>
        <p>Just press the button</p>

        <a href="mailto:SaraJohlu@outlook.com">
          <button>
            <BiMailSend />
          </button>
        </a>
      </article>
    </section>
  );
};

export default Contact;
