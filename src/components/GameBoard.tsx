import type { TurnsObject } from '../App';

interface GameBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  turns: TurnsObject[];
}

const initialGameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const GameBoard = ({ onSelectSquare, turns }: GameBoardProps) => {
  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== ''}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
