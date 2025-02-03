import { FiCheck } from "react-icons/fi";  // react-icons imported from react-icons
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from './slicers'

import Footer from "./Components/Footer"
import Home from './Components/Home/Home'

import './App.css'


function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const navigateHome = useNavigate();

  const submitName = () => {
    if(inputValue.trim() !== ''){
      dispatch(setName(inputValue));
      navigateHome('/home');
    } else {
      alert('No name submitted')
    }
  };

  return (
    <>
      <h1 className='hello-there'>Hello there!</h1>
      <p className='no-stranger'>Don&apos;t be a stranger, tell me your name</p>

      <span className='interaction-container'>

        <input
        className='input-field' 
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter name' 
        />

        <button className="submit-button" onClick={submitName}><FiCheck /></button>

      </span>
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>

    </>
  )
}

export default App
