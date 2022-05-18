import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Form, ListGroup, Button } from 'react-bootstrap';
import TaskListContext from '../context/TaskListContext';

export default function Body() {
  const {
    tasks,
    deleteTask,
    getAllTasks,
    updateTask,
    validateInput,
    handleChange,
  } = useContext(TaskListContext);

  const [updatedTask, setUpdatedTask] = useState('');

  const deleteByTaskId = async ({ target }) => {
    const targetId = target.parentElement.id;
    await deleteTask(targetId);
    getAllTasks();
  };

  const updateByTaskId = async ({ target }) => {
    const targetId = target.parentElement.id;
    await updateTask(targetId, updatedTask);
    getAllTasks();
  };

  const setTaskVisibility = ({ target }) => {
    const selectedTaskInput = target.parentElement.parentElement.firstElementChild;
    if (selectedTaskInput.style.visibility === 'visible') {
      selectedTaskInput.style.visibility = 'hidden';
    } else {
      selectedTaskInput.style.visibility = 'visible';
    }
  };

  return (
    <div className="task-list-container">
      <ListGroup as="ul">
        {
            tasks.map((task) => (
              <ListGroup.Item
                as="li"
                key={`${task.id}`}
              >
                <div className="task-list-item" id={task.id}>
                  { task.task }
                  <Form
                    className="update-form-container"
                    onSubmit={(e) => updateByTaskId(e)}
                    id={task.id}
                  >
                    <Form.Group className="update-form-input">
                      <Form.Label>
                        <Form.Control
                          onChange={(e) => handleChange(e, setUpdatedTask)}
                          placeholder="Atualize a tarefa"
                          type="input"
                          value={updatedTask}
                          required
                        />
                      </Form.Label>
                    </Form.Group>
                    <Button
                      className="form-btn"
                      variant="success"
                      type="submit"
                      disabled={validateInput(updatedTask)}
                    >
                      Atualizar Tarefa
                    </Button>
                  </Form>
                  <div className="task-list-btn-container" id={task.id}>
                    <Button
                      variant="success"
                      type="button"
                      id={task.id}
                      icon={solid('edit')}
                      className="task-list-editmark"
                      onClick={(e) => setTaskVisibility(e)}
                    >
                      Editar
                    </Button>
                    <FontAwesomeIcon
                      id={task.id}
                      icon={solid('xmark')}
                      className="task-list-xmark"
                      onClick={(e) => deleteByTaskId(e)}
                    />
                  </div>
                </div>
              </ListGroup.Item>
            ))
          }
      </ListGroup>
    </div>
  );
}
