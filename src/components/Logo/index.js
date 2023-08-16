import React from "react";
import styles from "./index.module.scss";
import man from "../../assets/hangman.png";

export default function Logo() {
    return(
        <div className={styles.main}>
            <div className={styles.logo}>
                <h1>Hangman</h1>
                <img src={man} alt={"hangman"}/>
            </div>
        </div>
    )
}