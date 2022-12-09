import { screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import { mockData, providerProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';

const dataItem = mockData[0];

describe("TodoItem component", () => {
  test('should render component correctly', () => {

    customRender(<TodoItem data={dataItem} />, providerProps);

    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();

    const text = dataItem.description.slice(0, 10);
    const query = new RegExp(text, 'i');
    const paragraph = screen.getByText(query);
    expect(paragraph).toBeInTheDocument();

    const date = [
      dataItem.created.getDate(),
      dataItem.created.getMonth() + 1,
      dataItem.created.getFullYear()
    ].join('.');
    const span = screen.getByText(date);
    expect(span).toBeInTheDocument();
  });
});
