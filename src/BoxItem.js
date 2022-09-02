import React from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import Select from 'react-select'


export default function BoxItem(props) {
  const { swap, kill, children, label, index, uid } = props;

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handleDrop = (e) => {
    console.log("BoxItem handleDrop ", e);
    e.stopPropagation();
    swap(e.dragData.index, index, e.dragData);
    //e.containerElem.style.visibility = "hidden";
  };

  const deleteMe = () => {
    console.log("deleteMe ", uid);
    kill(uid);
  };

  return (
    <div className="box_item_component">
      <DragDropContainer
        targetKey="boxItem"
        dragData={{ label: label, index: index }}
        onDrop={deleteMe}
        disappearDraggedElement={true}
        dragHandleClassName="grabber"
      >
        <DropTarget onHit={handleDrop} targetKey="boxItem">
            <div className="item">
              <span className="grabber">{label}</span>
              <Select options={options} />
              {/* {children} */}
            </div>
        </DropTarget>
      </DragDropContainer>
    </div>
  );
}
