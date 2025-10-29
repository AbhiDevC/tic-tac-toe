import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditName] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function onSave() {
    setEditName((edit) => !edit);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editName = <span className="palyer-name">{playerName}</span>;
  if (isEditing) {
    editName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }
  return (
    <li>
      <span className="player">
        {editName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onSave}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
