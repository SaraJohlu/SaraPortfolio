import { FiCheck } from "react-icons/fi"; // react-icons imported from react-icons
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "./slicers";

import Home from "./Components/Home";
import About from "./Components/About";
import ProjectsNContact from "./Components/ProjectsNContact";


import "./App.css";

function App() {
  // Making the App function for "start side"

  // const varibles for reducer, new guests can leave name when they visit my site
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigateHome = useNavigate();

  const submitName = () => {
    // Function for what's going to happen when the submit button are clicked. After leaving name that's being stored in store and then click on the button should navigate to Home page
    if (inputValue.trim() !== "") {
      dispatch(setName(inputValue));
      navigateHome("/home");
    } else {
      alert("No name submitted");
    }
  };

  return (
  // Making the first side disapear when user use the submit button and get the home side by putting the App.jsx content inside the first route element.
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1 className="hello-there">Hello there!</h1>
            <p className="no-stranger">
              Don&apos;t be a stranger, tell me your name
            </p>

            <span className="interaction-container">
              <input
                className="input-field"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} //When the default state get changed, it dispatch the action to store. e takes away unecessary space
                placeholder="Enter name"
              />

              <button className="submit-button" onClick={submitName}>
                <FiCheck />
              </button>

              <hr className="purple" />
              <hr className="turquoise"/>
              <hr className="indigo"/>
              <p className="copy">© Sara Johnson Lundén</p>
            </span>

          </>
        }
      />

      <Route path="/home/*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pnc" element={<ProjectsNContact />} />
    </Routes>
  );
}

export default App;
