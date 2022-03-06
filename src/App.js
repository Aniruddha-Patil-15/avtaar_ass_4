import "./styles.css";
function App() {
  return (
    <>
      <div className="Game">
        <span className="title">Aniruddha's Memory game</span>
        <div className="card">
          <div className="select">
            <div className="select-game-theme">
              <span>Select Game Theme</span>
              <div className="options">
                <button className="default">Numbers</button>
                <button className="non-active">Icons</button>
              </div>
            </div>
            <div className="select-game-theme">
              <br></br>
              <span>Number of Players</span>
              <div className="options">
                <button className="default">1</button>
                <button className="non-active">2</button>
                <button className="non-active">3</button>
                <button className="non-active">4</button>
              </div>
            </div>
            <div className="select-game-theme">
              <br></br>
              <span>Grid Size</span>
              <div className="options">
                <button className="default">4x4</button>
                <button className="non-active">6x6</button>
              </div>
            </div>
            <a href="anni.html">
              <br></br>
              <button className="start-game">
                <a href="/game">Start game</a>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
