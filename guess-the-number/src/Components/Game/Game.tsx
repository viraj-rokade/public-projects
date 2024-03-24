import { useState } from 'react'
import './Game.css'
import Input from "../Input/Input";
import Button from '../Button/Button';


function Game() {
  const [upperBound, setUpperBound] = useState<number | "">("");
  const [lowerBound, setLowerBound] = useState<number | "">("");
  const [secretNumber, setSecretNumber] = useState<number | null>(null);
  const [guessedNumber, setGuessedNumber] = useState<number>(0);
  const [guesses, setGuesses] = useState<Array<number>>([]);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [error, setError] = useState({show: false, message: "" });
  const [gameValidation, setGameValidation] = useState({correctGuess: false, message: "" });
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false);

  const startGame = () => {
    const randomNumber = Math.floor(Math.random() * (Number(upperBound) - Number(lowerBound) + 1) + Number(lowerBound));
    setSecretNumber(randomNumber);
    setIsGameStarted(true);
  }
  return (
    <div className="game-container">
      <div className="game-title">Guess the number!</div>
      <div className="game-options">
        {!isGameStarted && (
          <div className="options-container">
            <Input
              label="Lower Bound: "
              value={lowerBound}
              isGameStarted={isGameStarted}
              handleChange={(value: string) =>
                setLowerBound(value ? Number(value) : "")
              }
            />
            <Input
              label="Upper Bound: "
              value={upperBound}
              isGameStarted={isGameStarted}
              handleChange={(value: string) =>
                setUpperBound(value ? Number(value) : "")
              }
            />
            <Button
              label="Play"
              upperBound={Number(upperBound)}
              lowerBound={Number(lowerBound)}
              isGameStarted={isGameStarted}
              handleClick={startGame}
              handleValidation={(value) => setError(value)}
            />
            {error.show && (
              <div className="error-container">
                <p>{error.message}</p>
              </div>
            )}
          </div>
        )}
        {isGameStarted && (
          <div className="options-container">
            <Input
              label={`Enter a guess between ${lowerBound} and ${upperBound}`}
              value={lowerBound}
              isGameStarted={isGameStarted}
              handleChange={(value: string) =>
                setLowerBound(value ? Number(value) : "")
              }
            />
            {/* <Button
              label="Guess"
              upperBound={Number(upperBound)}
              lowerBound={Number(lowerBound)}
              isGameStarted={isGameStarted}
              handleClick={startGame}
              handleValidation={(value) => setError(value)}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;