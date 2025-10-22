function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="palyer-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="palyer-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App;
