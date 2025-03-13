import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ title, tasks, status, removeTask, editTask }) => {
  return (
    <Droppable droppableId={status.toString()}> {/* 👈 Assure-toi que c'est bien une string */}
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="task-list"
        >
          <h2>{title}</h2>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="task-item"
                >
                  <p>{task.title}</p>
                  <button onClick={() => editTask(task.id)}>Modifier</button>
                  <button onClick={() => removeTask(task.id)}>Supprimer</button>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder} {/* 👈 NE PAS OUBLIER */}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
