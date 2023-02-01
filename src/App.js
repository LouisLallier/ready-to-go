import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#60A5FA");

  return (
    <div className="App">
      <div>
        <div>
          <button className="m-4 rounded-md border border-blue-400 py-3 px-4 text-blue-400">
            ON
          </button>
          {/*<button*/}
          {/*  className="m-4 rounded-md border border-blue-400 py-3 px-4"*/}
          {/*  style={{ backgroundColor: "#60A5FA", color: "white" }}*/}
          {/*>*/}
          {/*  OFF*/}
          {/*</button>*/}
          <Button text="OFF" backGround={backgroundColor} textColor="white" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
