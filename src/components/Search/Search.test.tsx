import { screen } from '@testing-library/react';
import Search from './Search';
import { mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';

describe("Search component", () => {
  test('should render component correctly', () => {

    customRender(<Search />, mockDataProps);

    const list = screen.getByRole("textbox");
    expect(list).toBeInTheDocument();
  });
});
