import React from 'react';
import Enzyme, { mount, Adapter } from 'enzyme';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Body from '../components/Body';
Enzyme.configure({adapter: new Adapter()})

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

  it('', () => {
    const wrapper = mount(<Body />);
   expect(wrapper.find('ul').children()).toBeInTheDocument();
  });
});
