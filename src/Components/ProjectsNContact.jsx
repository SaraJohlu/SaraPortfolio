import Header from "./Header";
import Footer from "./Footer";
import Projects from './ProjectContactComponents/Projects'
import Contact from './ProjectContactComponents/Contact'

import "./style.css";
import '../mediaQ.css'


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
