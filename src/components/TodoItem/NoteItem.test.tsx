import { screen } from '@testing-library/react';
import NoteItem from './NoteItem';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';
import userEvent from '@testing-library/user-event';

const dataItem = mockData[0];

describe("NoteItem component", () => {
  test('should render component correctly', () => {
    customRender(<NoteItem data={dataItem} />, mockDataProps);

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

  test('should show item information when click on the element', async () => {
    const showNote = jest.fn();
    const mockProps = {
      ...mockDataProps,
      functions: {
        showNote
      }
    };
    customRender(<NoteItem data={dataItem} />, mockProps);

    const liItem = screen.getByRole('listitem');
    await userEvent.click(liItem);
    expect(showNote).toHaveBeenCalled();
  });

  test('should show confirm dialog when delete button is clicked', async () => {
    const showDeleteModal = jest.fn();
    const mockProps = {
      ...mockDataProps,
      functions: {
        showDeleteModal
      }
    };
    customRender(<NoteItem data={dataItem} />, mockProps);

    const deleteButton = screen.getByText('X');
    await userEvent.click(deleteButton);
    expect(showDeleteModal).toHaveBeenCalled();
  });
});
