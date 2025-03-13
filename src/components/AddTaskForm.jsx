import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Home.modules.css"; // Importation du CSS Module


function AddTaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState("À faire");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;
    addTask({ title: taskTitle, status: taskStatus });
    setTaskTitle("");
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <Form.Control
        type="text"
        placeholder="Ajouter une tâche..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <Form.Select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
        <option>À faire</option>
        <option>En cours</option>
        <option>Terminé</option>
      </Form.Select>
      <Button className={styles.addButton}type="submit" variant="success">Ajouter</Button>
    </Form>
  );
}

export default AddTaskForm;
