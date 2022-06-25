import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DragableElement";
import { dragItems } from "../../data";

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = [
  { id: 1, title: "open bounties", key: "openBounties" },
  { id: 2, title: "assigned/in progress", key: "inProgress" },
  { id: 3, title: "under review", key: "underReview" },
  { id: 4, title: "close / rewarded", key: "close" },
];

function Bounties() {
  const [elements, setElements] = React.useState(dragItems);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <div className="w-full min-h-screen py-16">
      <div className="main-container">
        <div className="bg-[#100e2e] overflow-x-auto rounded-[10px] p-5 w-full">
          <h1 className="text-white pb-1 mt-[20px] mb-[43px] w-full text-center text-4xl font-bold border-b border-[#4a4a4a]">
            Bounties
          </h1>
          <div className="overflow-x-auto">
            <div className="min-w-[1128px]">
              <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-4 gap-4 ">
                  {lists.map(({ title, key }) => (
                    <DraggableElement
                      listTitle={title}
                      elements={elements[key]}
                      key={key}
                      prefix={key}
                    />
                  ))}
                </div>
              </DragDropContext>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bounties;
