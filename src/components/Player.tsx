import { useState } from 'react';

interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
}

const Player = ({ initialName, symbol, isActive }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type='text' required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
