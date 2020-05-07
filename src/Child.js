import React, { useState } from "react";
import  './Child.css'

function Child(props) {
  const [color, setColor] = useState(props.color);

  function changeColor() {
    setColor(color);
  }

  return (
    <div className="full" style={{ "background-color": `${color}` }}>
      <button className="hw"  onClick={changeColor}>
        Hello World
      </button>

      
        <h2 className="blink" >
          
          Blink {props.blink ? 

          (<span style={{color: 'blue'}}>TRUE</span>) : 
          
          (<span style={{color: 'red'}}>FALSE</span>)}

         </h2>
      
    </div>
  );
}

console.log(Child);
export default Child;
