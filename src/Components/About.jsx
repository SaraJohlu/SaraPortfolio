import Header from "./Header";
import Footer from "./Footer";

import "./style.css";
import '../mediaQ.css'

const About = () => {
  return (
    <>
      <Header />
      <section className="about-container">
        <h1>Sara Johnson Lundén</h1>
        <h2>About me</h2>
        <p>
          I&apos;m a passionate front-end developer in training with a
          strong love for web design and digital creativity. I really enjoy crafting
          visually appealing and user-friendly experiences that bring ideas to
          life on the web. Besides coding and creating something creative, I&apos;m a huge fan of video games, movies,
          and reading. Whether it&apos;s exploring immersive game worlds, diving into
          captivating stories, especailly horror genre, or analyzing great cinematography, I find
          inspiration in all forms of digital and visual storytelling. I&apos;m
          always eager to learn, experiment, and grow as a developer. And I&apos;m eager to jump into 
          my new path in life and meet other fantastic developers.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
