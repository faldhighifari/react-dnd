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

const box = ['box select 1', 'box select 2 ', 'box select 3']


export default function App() {
  return (
    <div className="App drag_things_to_boxes">
      <h2>Drag and Drop things into the box</h2>
    
      <div className="boxes">
        <Box targetKey="box" />
      </div>

      <div className="things_to_drag">
        <Boxable targetKey="box" label={box[0]} />
        <Boxable
          targetKey="box"
          label={box[1]}
        />
        <Boxable targetKey="box" label={box[2]} />
      </div>

      {/* <Select options={options} /> */}
      
      <div style={{ clear: "both" }}>&nbsp;</div>
      
    </div>
  );
}
