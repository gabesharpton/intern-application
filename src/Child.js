import React, { useState } from "react";

function Child(props) {
  const [color, setColor] = useState(props.color);

  function changeColor() {
    setColor(`${color}`);
  }

  return (
    <div className="full" style={{ "background-color": `${color}` }}>
      <div className="hw" style={{ color: `black` }} onClick={changeColor}>
        Hello World
      </div>

      {props.blink ? (
        <h2 className="blink" style={{ color: `black` }}>
          Hello
        </h2>
      ) : (
        <h2 className="blink" style={{ color: `black` }}>
          World
        </h2>
      )}
    </div>
  );
}

console.log(Child);
export default Child;
