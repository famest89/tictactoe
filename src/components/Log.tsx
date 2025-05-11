import type { TurnsObject } from '../App';

interface LogProps {
  turns: TurnsObject[];
}

const Log = ({ turns }: LogProps) => {
  return (
    <ol id='log'>
      {turns.map((turn) => (
        <li key={`${turn.square.row},${turn.square.row}${Math.random()}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
