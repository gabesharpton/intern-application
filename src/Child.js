import React, { useState } from "react";
import "./Child.css";

function Child(props) {
  const [color, setColor] = useState(props);

  function changeColor() {
    setColor(`${props.color}`);
  }

  return (
    <div className="full" style={{ "background-color": `${color}` }}>
      <h1 className="hw" onClick={changeColor}>
        Hello World, CLICK ME
      </h1>

      <h2 className="blink">
        Blink{" "}
        {props.blink ? (
          <span style={{ color: "blue" }}>TRUE</span>
        ) : (
          <span style={{ color: "red" }}>FALSE</span>
        )}
      </h2>
    </div>
  );
}

export default Child;
