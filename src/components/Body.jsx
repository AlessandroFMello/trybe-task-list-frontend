import React, { useContext, useState } from 'react';
import { Form, ListGroup, Button } from 'react-bootstrap';
import TaskListContext from '../context/TaskListContext';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Body() {
  const {
    tasks,
    deleteTask,
    getAllTasks,
    updateTask,
    updateStatus,
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
    const selectedTaskInput = target.parentElement.firstElementChild;
    await updateTask(targetId, updatedTask);
    getAllTasks();
    selectedTaskInput.style.visibility = 'hidden';
    setUpdatedTask('');
  };

  const setTaskVisibility = ({ target }) => {
    const selectedTaskInput = target.parentElement.parentElement.firstElementChild;
    if (selectedTaskInput.style.visibility === 'visible') {
      selectedTaskInput.style.visibility = 'hidden';
    } else {
      selectedTaskInput.style.visibility = 'visible';
    }
  };

  const colorObject = {
    "PENDING": "rgb(255, 180, 191, 0.8)",
    "CURRENT": "rgb(246, 242, 212, 0.8)",
    "DONE": "rgb(189, 242, 216, 0.8)",
  }

  return (
    <div className="task-list-container">
      <ListGroup as="ul">
        {
            tasks.map((task) => (
              <ListGroup.Item
                as="li"
                key={`${task.id}`}
                style={{backgroundColor: `${colorObject[task.status]}`}}
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
                          as="input"
                          onChange={(e) => handleChange(e, setUpdatedTask)}
                          placeholder="Atualize a tarefa"
                          value={updatedTask}
                          required
                        />
                      </Form.Label>
                    </Form.Group>

                    <Button
                      className="form-btn"
                      variant="secondary"
                      type="submit"
                      disabled={validateInput(updatedTask)}
                    >
                      Atualizar Tarefa
                    </Button>
                  </Form>

                  <div className="task-list-btn-container" id={task.id}>
                    <Form.Group controlId={task.id}>
                      <Form.Control
                        as="select"
                        className="select-field"
                        value={task.status}
                        onChange={e => {
                          updateStatus(Number(e.target.id), e.target.value);
                        }}
                      >
                        <option value="PENDING">Pendente</option>
                        <option value="CURRENT">Em Andamento</option>
                        <option value="DONE">Completa</option>
                      </Form.Control>
                    </Form.Group>

                    <Button
                      variant="semCor"
                      type="button"
                      id={task.id}
                      className="task-list-editmark"
                      onClick={(e) => setTaskVisibility(e)}
                    >
                      Editar
                    </Button>
                    <BsFillTrashFill
                      id={task.id}
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
