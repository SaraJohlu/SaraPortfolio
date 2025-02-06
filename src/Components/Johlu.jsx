// Johlu page will be the first welcome component the user will se when they navigate too home

import { useSelector } from "react-redux";
import "./style.css";
import Profilepic from '../assets/profil1.png'
import AboutMe from "../AboutMe";

const Johlu = () => {
  const yourName = useSelector((state) => state.user.name);


  return (
    <>
    <main className="johlu-side">
    
      <section className="home-container">
        <h1 className="welcome-message">Welcome {yourName}</h1>
        <p>
          Nice to see you finding your way to my portfolio site.
        </p>
      </section >

{/* This container calls for the props */}
      <section className='profilecard'>
      <img className="profile-pic" src={Profilepic} alt="A profile picture of me" />
          <AboutMe name='Sara' age={31} student='Front-end Student' country='Sweden'/>
      </section>
      </main>
      
    </>
  );
};

export default Johlu;
