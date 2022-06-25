import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";

const DraggableElement = ({ prefix, elements, listTitle }) => {
  // conditional styles

  let color = "";

  if (prefix === "openBounties") {
    color = "#c4c4c4";
  }
  if (prefix === "inProgress") {
    color = "#5f71d4";
  }
  if (prefix === "underReview") {
    color = "#a516b9";
  }
  if (prefix === "close") {
    color = "#06dbac";
  }
  return (
    <div>
      <div
        style={{ borderColor: color }}
        className={`bg-[#5a4860] mb-8 text-lg font-bold uppercase text-white px-[13px] rounded-t-lg py-3 border-b-4 `}
      >
        {listTitle}
      </div>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="flex h-full w-full min-h-screen min-w-[270px] flex-col gap-y-4 border-x border-[#4a4a4a] px-3">
              {elements.map((item, index) => (
                <ListItem
                  color={color}
                  prefix={prefix}
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DraggableElement;
