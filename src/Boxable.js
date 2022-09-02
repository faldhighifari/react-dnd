import React from "react";
import { DragDropContainer } from "react-drag-drop-container";
import Select from 'react-select'
/*
    Boxable -- a thing you can drag into a Box
*/

export default function Boxable(props) {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  const box = ['box select one', 'box select two ', 'box select 3']
  
  const { targetKey, label, image, customDragElement } = props;
  return (
    <div className="boxable_component" style={{ display: "inline-block" , marginRight: '0.8rem'}}>
      <DragDropContainer
        targetKey={targetKey}
        dragData={{ label: label }}
        customDragElement={customDragElement}
        onDragStart={() => console.log("start")}
        onDrag={() => console.log("dragging")}
        onDragEnd={() => console.log("end")}
        onDrop={(e) => console.log(e)}
      >
        {/* <img src={image} height="45" style={{ marginLeft: 40 }} /> */}
       
        <Select options={options} />

        {/* <p>{options[0].label}</p> */}

      </DragDropContainer>
    </div>
  );
}
