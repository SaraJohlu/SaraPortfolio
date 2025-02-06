import Header from "./Header";
import Footer from "./Footer";
import Projects from './ProjectContactComponents/Projects'

import "./style.css";

const ProjectsNContact = () => {
  return (
    <>
      <Header />
        <section className="projects-contact-container">
          <Projects />
        </section>
      <Footer />
    </>
  );
};

export default ProjectsNContact;
