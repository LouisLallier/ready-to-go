import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const blue = "#60A5FA";
  const white = "white";

  const [switch1, setSwitch1] = useState(false);

  return (
    <div className="App">
      <div>
        {switch1 ? (
          <div className="flex">
            <Button
              onClick={() => {
                setSwitch1(false);
              }}
              text="On"
              backGround={blue}
              textColor={white}
            />
            <Button text="OFF" backGround={white} textColor={blue} />
          </div>
        ) : (
          <div className="flex">
            <Button
              onClick={() => {
                setSwitch1(true);
              }}
              text="On"
              backGround={white}
              textColor={blue}
            />
            <Button text="OFF" backGround={blue} textColor={white} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
