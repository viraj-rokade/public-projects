import { useState } from 'react'
import './Game.css'
import DefaultInputs from '../DefaultInputs/DefaultInputs';


function Game() {
  const [upperBound, setUpperBound] = useState<number>(100);
  const [lowerBound, setLowerBound] = useState<number>(1);
  //const [guesses, setGuesses] = useState<Array<number>>([]);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  //const [restartGame, setRestartGame] = useState<boolean>(false);
  return (
    <div className="game">
      <label className="title">Guess the number!</label>
      {!isGameStarted && (
        <DefaultInputs
          onUpperBoundChange={(bound: number) => setUpperBound(bound)}
          onLowerBoundChange={(bound: number) => setLowerBound(bound)}
        />
      )}
    </div>
  );
}

export default Game;