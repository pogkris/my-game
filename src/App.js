import React,{useState} from "react";
import Logo from "./components/Logo";
import MainPart from "./components/MainPart";
import "./App.css";
 
function App() {
  
  const [showGame, setShowGame] = useState(false);

  const handleClick = () => {
    setShowGame(true);
  };

  return (
    <>
    <Logo />
    <div className="main">
      {showGame ? (<MainPart/>) : (
        <div className="button">
          <h2>Click "Start" to play</h2>
          <button className="button-54 " onClick={handleClick}>Start</button>
        </div>
       
      )}
    </div>
    </>
  )
}

export default App;
