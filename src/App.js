import "./App.css";
import Login from "./components/login";

function App() {
  const keyDown = () => console.log("key down");
  return (
    <div className="App">
      <div className="container-box textChildContainer">
        <h1>Learn to code by watching others</h1>

        <p>
          See how experienced developers solve problems in real time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="container-box formChildContainer">
        <button
          className="trialButton formChildren"
          tabIndex="1"
          onKeyDown={keyDown}
        >
          <strong>Try it free for 7 days</strong> then $20/mo. thereafter
        </button>
        <Login />
      </div>
    </div>
  );
}

export default App;
