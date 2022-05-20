import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import MainPage from '../pages/MainPage';

beforeEach(() => {
  const { history } = renderWithRouter(<MainPage />);
  history.push('/');
});

describe('Testa o componente <MainPage />', () => {
  it('Testa se o header é renderizado', async () => {
    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('Testa se o main é renderizado', async () => {
    const header = screen.getByRole('main');

    expect(header).toBeInTheDocument();
  });
});
