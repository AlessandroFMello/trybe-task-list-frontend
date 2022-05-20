import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Body from '../components/Body';

beforeEach(() => {
  const { history } = renderWithRouter(<Body />);
  history.push('/');
});

afterEach(() => jest.clearAllMocks());

describe('Testa o componente <Body />', () => {
  it('Testa se há uma lista não ordenada', () => {
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});
