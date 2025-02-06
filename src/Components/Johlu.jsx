// Johlu page will be the first welcome component the user will se when they navigate too home

import { useSelector } from "react-redux";
import "./style.css";
import Profilepic from '../assets/profil1.png'
import '../mediaQ.css'

const Johlu = () => {
  const yourName = useSelector((state) => state.user.name);

  return (
    <>
    <main className="johlu-side">
    <img className="profile-pic" src={Profilepic} alt="A profile picture of me" />
      <section className="home-container">
        <h1 className="welcome-message">Welcome {yourName}</h1>
        <p>
          Nice to see you finding your way to my portfolio site. My name is
          Sara, I&apos;m a frontend student from Sweden. Please navigate around
          to read more about me and get a glimpse of the applications and
          projects I have done.
        </p>
      </section>
      </main>
      
    </>
  );
};

export default Johlu;
