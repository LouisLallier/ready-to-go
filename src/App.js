import Button from "./components/Button";
import { useState } from "react";
import ariane from "./ariane.png";

const App = () => {
  const blue = "#60A5FA";
  const white = "white";
  const red = "#F87171";
  const green = "#4ADE80";
  const orange = "#efc976";

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App relative mt-auto flex h-screen content-center items-center justify-evenly">
      <div
        className="absolute top-0 flex h-32 w-screen items-center justify-around"
        style={{ border: "solid 1px black" }}
      >
        <img src={ariane} alt="fusée" />
        <div className="text-5xl">Ready To Go ?</div>
      </div>
      <div className="flex flex-col">
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

      <div>
        {switch1 === true && switch2 === true && switch3 === true ? (
          <div
            className="m-auto flex h-32 w-44 justify-center rounded-md"
            style={{ backgroundColor: green }}
          >
            <button
              onClick={() => {
                alert("La fusée a décollé ! Bravo !");
              }}
            >
              LAUNCH !
            </button>
          </div>
        ) : (
          <div
            className="m-auto flex h-32 w-44 justify-center rounded-md"
            style={{ backgroundColor: red }}
          >
            <button>DENIED !</button>
          </div>
        )}
        <div
          className="m-auto mt-8 flex h-20 w-44 justify-center rounded-md"
          style={{ backgroundColor: orange }}
        >
          <button
            onClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
          >
            RESET EVERYTHING GOD DAMN IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
