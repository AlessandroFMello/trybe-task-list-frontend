import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Header from '../components/Header';

beforeEach(() => {
  const { history } = renderWithRouter(<Header />);
  history.push('/');
});

describe('Testa o componente <Header />', () => {
  it('Testa se há um textbox com placeholder "Insira uma nova tarefa"', () => {
    const headerInput = screen.getByRole('textbox');
    const headerPlaceholder = screen.getByPlaceholderText('Insira uma nova tarefa');
    expect(headerInput).toBeInTheDocument();
    expect(headerPlaceholder).toBeInTheDocument();
  });

  it('Testa se é possível adicionar texto no textbox', () => {
    const headerInput = screen.getByRole('textbox');
    fireEvent.change(headerInput, {target: {value: 'abcde'}});
  });

  it('Testa se há um botão com texto "Adicionar Tarefa"', () => {
    const headerBtn = screen.getByRole('button');

    expect(headerBtn).toBeInTheDocument();
  });

  it('Testa se o botão "Adicionar Tarefa" está desabilitado', () => {
    const headerBtn = screen.getByRole('button');
    expect(headerBtn).toBeDisabled();
  });

  it('Testa se o botão "Adicionar Tarefa" é habilitado corretamente quando há texto', () => {
    const headerBtn = screen.getByRole('button');
    const headerInput = screen.getByRole('textbox');
    fireEvent.change(headerInput, {target: {value: 'Enabled Btn'}});
    expect(headerBtn).toBeEnabled();
  });

  it('Testa se o botão "Adicionar Tarefa" envia corretamente uma nova tarefa', () => {
    const headerInput = screen.getByRole('textbox');
    const headerBtn = screen.getByRole('button');

    fireEvent.change(headerInput, {target: {value: 'Teste de click'}});

    expect(headerBtn).toBeEnabled();
    fireEvent.click(headerBtn);
  });
});
