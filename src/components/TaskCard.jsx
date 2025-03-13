import React from "react";
import { Button, Card } from "react-bootstrap";

function TaskCard({ task, removeTask }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Button variant="danger" size="sm" onClick={() => removeTask(task.id)}>Supprimer</Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
