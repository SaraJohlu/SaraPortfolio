import Header from "./Header";
import Footer from "./Footer";
import Projects from './ProjectContactComponents/Projects'
import Contact from './ProjectContactComponents/Contact'
import Mail from "./ProjectContactComponents/Mail";

import "./style.css";


const ProjectsNContact = () => {
  return (
    <>
      <Header />
        <section className="projects-contact-container">
          <Projects />
          <Contact />
          <Mail />
        </section>
      <Footer />
    </>
  );
};

export default ProjectsNContact;
