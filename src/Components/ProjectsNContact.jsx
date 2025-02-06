import Header from "./Header";
import Footer from "./Footer";
import Projects from "../Projects";
import Contact from "../Contact";


import "./style.css";



const ProjectsNContact = () => {
  return (
    <>
      <Header />
        <section className="projects-contact-container">
          <Projects />
          <Contact />
        </section>
      <Footer />
    </>
  );
};

export default ProjectsNContact;
