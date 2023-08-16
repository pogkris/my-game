import React,{useState} from "react";
import styles from "./index.module.scss";
import hang from "../../assets/hang.png";
import win from "../../assets/win.jpg";

export default function MainPart() {
    const word = "IRONMAN";
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [wrongGuess, setWrongGuess] = useState(false);
    const [wrongGuess2, setWrongGuess2] = useState(false);
    const [wrongGuess3, setWrongGuess3] = useState(false);
    const [wrongGuess4, setWrongGuess4] = useState(false);
    const [wrongGuess5, setWrongGuess5] = useState(false);
    const [wrongGuess6, setWrongGuess6] = useState(false);
    const [loseWord, setLoseWord] = useState(false);
    const [count, setCount] = useState(0);

    const resetGame = () => {
        setCorrectGuesses([]);
        setDisabledButtons([]);
        setCount(0);
        setWrongGuess(false);
        setWrongGuess2(false);
        setWrongGuess3(false);
        setWrongGuess4(false);
        setWrongGuess5(false);
        setWrongGuess6(false);
        setLoseWord(false);
    };

    const maskedWord = word.split('').map(letter => 
        correctGuesses.includes(letter) ? letter : "_").join(" "); 

    function handleButtonClick(letter) {
        if (word.includes(letter)) {
            setCorrectGuesses([...correctGuesses, letter])
        } else {
            if(count === 0) {
                setWrongGuess(true);  
                setCount(1); 
            } else if(count === 1) {
                setWrongGuess2(true);
                setCount(2);
            } else if(count === 2) {
                setWrongGuess3(true);
                setCount(3);
            } else if(count === 3) {
                setWrongGuess4(true);
                setCount(4);
            } else if(count === 4) {
                setWrongGuess5(true);
                setCount(5);
            } else if(count === 5) {
                setWrongGuess6(true);
                setCount(6);
                setLoseWord(true);
            }
        }
        setDisabledButtons([...disabledButtons, letter]);
    }

    return(
        <div className={styles.main}>
           <div className={styles.makingWord}>
                <div className={styles.hanging}>
                    <img src={hang} alt={"wood to hang"}/>
                    {loseWord && <div className={styles.lose}>
                        <h2> YOU LOSE !</h2>
                        <p>But it doesnt mean you a loser!</p>
                        <h4>TRY AGAIN!</h4>
                        <button onClick={resetGame}>Reset Game</button>
                        </div>}
                    {wrongGuess &&<span className={styles.head}></span>}
                    {wrongGuess2 && <div className={styles.body}></div>}
                    {wrongGuess3 && <div className={styles.leftHand}></div>}
                    {wrongGuess4 && <div className={styles.rightHand}></div>}
                    {wrongGuess5 && <div className={styles.leftFoot}></div>}
                    {wrongGuess6 && <div className={styles.rightFoot}></div>}
                </div>
                <p>{maskedWord}</p>
           </div>
           <div className={styles.buttonLetters}>
                {alphabets.map((letter) => 
                    <button onClick={() => handleButtonClick(letter)}
                    disabled={disabledButtons.includes(letter)}>{letter}</button>)}
           </div>
           <div className={styles.hint}>
                <h3>Hover to get a hint: </h3>
                <p className={styles.bigHint}>He's Marvel Superhero</p>
           </div>
            {!maskedWord.includes("_") && <div className={styles.win}>
                <h2>You won!</h2>
                <img src={win} alt={"congratulations"}/>
            </div>}
        </div>
    )
}
