import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const blue = "#60A5FA";
  const white = "white";

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <div>
        {switch1 ? (
          <div className="flex">
            <Button
              onClick={() => {
                setSwitch1(true);
              }}
              text="On"
              backGround={blue}
              textColor={white}
            />
            <Button
              onClick={() => {
                setSwitch1(false);
              }}
              text="OFF"
              backGround={white}
              textColor={blue}
            />
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
            <Button
              onClick={() => {
                setSwitch1(false);
              }}
              text="OFF"
              backGround={blue}
              textColor={white}
            />
          </div>
        )}
      </div>
      <div>
        {switch2 ? (
          <div className="flex">
            <Button
              onClick={() => {
                setSwitch2(true);
              }}
              text="On"
              backGround={blue}
              textColor={white}
            />
            <Button
              onClick={() => {
                setSwitch2(false);
              }}
              text="OFF"
              backGround={white}
              textColor={blue}
            />
          </div>
        ) : (
          <div className="flex">
            <Button
              onClick={() => {
                setSwitch2(true);
              }}
              text="On"
              backGround={white}
              textColor={blue}
            />
            <Button
              onClick={() => {
                setSwitch2(false);
              }}
              text="OFF"
              backGround={blue}
              textColor={white}
            />
          </div>
        )}
      </div>
      <div>
        {switch3 ? (
          <div className="flex">
            <Button
              onClick={() => {
                setSwitch3(true);
              }}
              text="On"
              backGround={blue}
              textColor={white}
            />
            <Button
              onClick={() => {
                setSwitch3(false);
              }}
              text="OFF"
              backGround={white}
              textColor={blue}
            />
          </div>
        ) : (
          <div className="flex">
            <Button
              onClick={() => {
                setSwitch3(true);
              }}
              text="On"
              backGround={white}
              textColor={blue}
            />
            <Button
              onClick={() => {
                setSwitch3(false);
              }}
              text="OFF"
              backGround={blue}
              textColor={white}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
