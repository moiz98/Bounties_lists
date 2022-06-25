import { Draggable } from "react-beautiful-dnd";
import React from "react";
import Card from "../Card";

const ListItem = ({ item, index, color, prefix }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card prefix={prefix} color={color} item={item} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
