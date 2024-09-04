import { useState } from "react";
export default function Player({ initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function edit() {
    setIsEditing((prevState) => !prevState);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  let form = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    form = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive? 'active' : undefined}>
      <span className="player">
        {form}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={edit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
