import React from 'react';
import styles from './Instructions.module.css';

const Instructions = (props) => (
  <div>
    <h1>How to play:</h1>
    <ul className={styles.Instructions}>
        <li>Players take turns in a clockwise order.</li>
        <li>A player must throw a 6 to move a piece from the starting circle onto the first square on the track.</li>
        <li>Each throw, the player decides which piece to move.</li>
        <li>A piece simply moves in a clockwise direction around the track given by the number thrown.</li>
        <li>If no piece can legally move according to the number thrown, play passes to the next player.</li>
        <li>A throw of 6 gives another turn.</li>
        <li>If a piece lands on a piece of a different color, the piece jumped upon is returned to its starting circle.</li>
    </ul>
  </div>
)

export default Instructions;