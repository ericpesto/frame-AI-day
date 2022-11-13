import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./App.css";

function App() {
  const handle = useFullScreenHandle();

  return (
    <>
      <button onClick={handle.enter}>Enter fullscreen</button>
      <FullScreen handle={handle}>
        <img
          src="https://drive.google.com/uc?export=view&id=11AH-SHVgdUqLgmFSzCeEA5gHwSjoHeO0"
          alt="prompt"
        />
      </FullScreen>
    </>
  );
}

export default App;
