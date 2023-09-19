import { screen } from '@testing-library/react';
import Search from './Search';
import { mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';
import userEvent from '@testing-library/user-event';

describe("Search component", () => {
  test('should render component correctly', () => {

    customRender(<Search />, mockDataProps);

    const list = screen.getByRole("textbox");
    expect(list).toBeInTheDocument();
  });

  test('should send search query on input typing', async () => {
    const search = jest.fn();
    jest.useFakeTimers();
    const mockProps = { ...mockDataProps, functions: { search } };    

    customRender(<Search />, mockProps);

    const query = 'test query';
    const input = screen.getByRole('textbox');
    await userEvent.type(input, query);
    expect(search).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(search).toHaveBeenCalledWith(query);
    expect(search).toHaveBeenCalledTimes(1);
  })
});
