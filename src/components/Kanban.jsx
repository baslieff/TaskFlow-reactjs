import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import AddTaskForm from "../../components/Kanban/AddTaskForm";

function Kanban() {
  const [tasks, setTasks] = useState({
    "À faire": [{ id: "1", title: "Créer la maquette UI" }],
    "En cours": [{ id: "2", title: "Configurer le backend" }],
    "Terminé": [{ id: "3", title: "Finaliser la base de données" }],
  });

  const addTask = (newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [newTask.status]: [...(prevTasks[newTask.status] || []), { id: Date.now().toString(), title: newTask.title }],
    }));
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = {};
      Object.keys(prevTasks).forEach((status) => {
        updatedTasks[status] = prevTasks[status].filter((task) => task.id !== id);
      });
      return updatedTasks;
    });
  };

  const editTask = (id) => {
    const newTitle = prompt("Modifier la tâche :");
    if (newTitle) {
      setTasks((prevTasks) => {
        const updatedTasks = {};
        Object.keys(prevTasks).forEach((status) => {
          updatedTasks[status] = prevTasks[status].map((task) =>
            task.id === id ? { ...task, title: newTitle } : task
          );
        });
        return updatedTasks;
      });
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceCol = tasks[source.droppableId];
    const destCol = tasks[destination.droppableId];

    const taskMoved = sourceCol[source.index];

    const updatedSource = [...sourceCol];
    updatedSource.splice(source.index, 1);

    const updatedDest = [...destCol];
    updatedDest.splice(destination.index, 0, taskMoved);

    setTasks({
      ...tasks,
      [source.droppableId]: updatedSource,
      [destination.droppableId]: updatedDest,
    });
  };

  return (
    <motion.div className={styles.container}>
      <h1 className={styles.title}>📌 Kanban - Drag & Drop</h1>

      <AddTaskForm addTask={addTask} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.kanban}>
          {Object.keys(tasks).map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <motion.div
                  className={styles.column}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {/* 🟢 Titre de la colonne fixé en haut */}
                  <div className={styles.columnHeader}>
                    <h2 className={styles.columnTitle}>{status}</h2>
                  </div>

                  {/* 🔵 Liste des tâches */}
                  <div className={styles.taskList}>
                    {tasks[status].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <motion.div
                            className={styles.task}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task.title}
                            <div className={styles.actions}>
                              <button onClick={() => editTask(task.id)} className={styles.editButton}>✏️</button>
                              <button onClick={() => removeTask(task.id)} className={styles.deleteButton}>🗑️</button>
                            </div>
                          </motion.div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </motion.div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </motion.div>
  );
}

export default Kanban;