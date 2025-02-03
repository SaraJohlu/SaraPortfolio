import { FiCheck } from "react-icons/fi";  // react-icons imported from react-icons

import Footer from "./Components/Footer"

import './App.css'

function App() {
 

  return (
    <>
      <h1 className='hello-there'>Hello there!</h1>
      <p className='no-stranger'>Don&apos;t be a stranger, tell me your name</p>

      <span className='interaction-container'>

        <input
        className='input-field' 
        type='text'
        placeholder='Enter name' 
        value={''}/>

        <button className="submit-button"><FiCheck /></button>

      </span>
      <Footer />

    </>
  )
}

export default App
