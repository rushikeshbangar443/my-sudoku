import React from "react";
// import Timer from "./Timer";
// import ReactSwitch from "react-switch";



//Container at the top containg the scroll bar, createBoard button and mode
export default function Settings({
  difficulty,
  handleSliderChange,
  startGame,
  minutes,
  seconds,
  timevalue,
  mode,
  toggleMode,
}) {
  return (
    <>
      <div className="settings-container">
        <div className="header-sudoku">
          <h1>
            Su<span className="header__group-one">do</span><span className="header__group-two">ku</span>
          </h1>
        </div>
        <div className="slider-container">
          <div className="flex-container">
            <label>17</label>
            <input
              type="range"
              min="17"
              max="80"
              className="slider"
              value={difficulty}
              onChange={handleSliderChange}
            ></input>
            <label>80</label>
          </div>
          <label>Starting Cells: {difficulty}</label>
        </div>
        <button className="button-create-board" onClick={startGame} >
          Create New Board
        </button>
       
        <h2 className="timer">Timer: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
       
        {/* <label className="switch-label">Easy Mode</label>
        <ReactSwitch
          className="switch"
          checked={mode === "Easy"}
          onChange={toggleMode}
        ></ReactSwitch> */}
      </div>

    </>
  );
}
