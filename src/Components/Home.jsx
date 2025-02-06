import Header from "./Header";
import Footer from "./Footer";
import Johlu from "./Johlu";

import "./style.css";


const Home = () => {
  return (
    <>
      <main className="home-side">
        <Header />
        <Johlu />
        <Footer />
      </main>
    </>
  );
};

export default Home;
