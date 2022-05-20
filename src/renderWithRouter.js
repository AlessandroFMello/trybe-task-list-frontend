import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import TaskListProvider from './context/TaskListProvider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <TaskListProvider>
        <Router history={history}>{component}</Router>
      </TaskListProvider>
    ), history,
  });
};
export default renderWithRouter;