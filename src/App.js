import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./App.css";

function App() {
  const handle = useFullScreenHandle();

  const refreshPage = () => {
    window.location.reload(false);
  };

  setTimeout(() => {
    refreshPage();
  }, 1200);

  return (
    <>
      {/* <meta http-equiv="refresh" content="5"></meta> */}
      {/* <button onClick={handle.enter}>Enter fullscreen</button> */}
      <FullScreen handle={handle}>
        <img
          src="https://drive.google.com/uc?export=view&id=14aBeRw3tZ5waF870NN_CaCCOPYGkLfya"
          alt="prompt"
          onClick={handle.enter}
        />
      </FullScreen>
    </>
  );
}

export default App;
