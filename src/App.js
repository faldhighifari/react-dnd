import "./styles.css";
import React from "react";
import Boxable from "./Boxable";
import Box from "./Box";
import Select from 'react-select'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const MyComponent = () => (
//   <Select options={options} />
// )

export default function App() {
  return (
    <div className="App drag_things_to_boxes">
      <h2>Drag and Drop things into the box</h2>
    
      <div className="boxes">
        <Box targetKey="box" />
      </div>

      <div className="things_to_drag">
        <Boxable targetKey="box" label="bana1nas" image="img/banana.png" />
        <Boxable
          targetKey="box"
          label="cheeseburger"
          image="img/surprise.png"
        />
        <Boxable targetKey="box" label="orange" image="img/orange.png" />
      </div>

      {/* <Select options={options} /> */}
      
      <div style={{ clear: "both" }}>&nbsp;</div>
      
    </div>
  );
}
