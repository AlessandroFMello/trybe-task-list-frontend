import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import getAllTasksFromApi from '../helpers/getAllTasksFromApi';
import TaskListContext from './TaskListContext';
import postTaskInDatabase from '../helpers/postTaskInDatabase';
import deleteTaskFromDatabase from '../helpers/deleteTaskFromDatabase';
import updateTaskInDatabase from '../helpers/updateTaskInDatabase';

function TaskListProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    const allTasks = await getAllTasksFromApi();
    setTasks(allTasks);
  };

  const postNewTask = async (newTask) => {
    await postTaskInDatabase(newTask);
  };

  const updateTask = async (taskId, UpdatedTask) => {
    await updateTaskInDatabase(taskId, UpdatedTask);
  };

  const deleteTask = async (taskId) => {
    await deleteTaskFromDatabase(taskId);
  };

  const validateInput = (task) => {
    const MIN_LENGTH = 1;
    const verifyInputLength = task.length >= MIN_LENGTH;

    return !verifyInputLength;
  };

  const handleChange = ({ target }, setterFunc) => {
    const task = target.value;
    setterFunc(task);
  };

  useEffect(() => {
    getAllTasks();
    console.log('[getAllTasks] - useEffect');
  }, []);

  const context = {
    tasks,
    setTasks,
    getAllTasks,
    postNewTask,
    updateTask,
    deleteTask,
    validateInput,
    handleChange,
  };

  return (
    <TaskListContext.Provider value={context}>
      {children}
    </TaskListContext.Provider>
  );
}

TaskListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskListProvider;
