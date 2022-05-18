import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TaskListContext from '../context/TaskListContext';

export default function NewTaskForm() {
  const {
    postNewTask,
    getAllTasks,
    validateInput,
    handleChange,
  } = useContext(TaskListContext);

  const [newTask, setNewTask] = useState('');

  const onSubmitTask = async (e) => {
    e.preventDefault();
    await postNewTask(newTask);
    getAllTasks();
    setNewTask('');
  };

  return (
    <Form className="form-container" onSubmit={(e) => onSubmitTask(e)}>
      <Form.Group className="form-input">
        <Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e, setNewTask)}
            placeholder="Insira uma nova tarefa"
            type="input"
            value={newTask}
            required
          />
        </Form.Label>
      </Form.Group>
      <Button
        className="form-btn"
        variant="success"
        type="submit"
        disabled={validateInput(newTask)}
      >
        Adicionar Tarefa
      </Button>
    </Form>
  );
}
