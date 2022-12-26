import { screen } from '@testing-library/react';
import NoteList from './NoteList';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';

describe("NoteList component", () => {
  test('should render component correctly', () => {

    customRender(<NoteList data={mockData} />, mockDataProps);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  test('should show empty message', () => {

    const emptyDataProps = {
      ...mockDataProps, initialList: { data: [], currentNoteItem: null }
    }
    customRender(<NoteList data={[]} />, emptyDataProps);

    const message = screen.queryByText('The list is empty');
    expect(message).toBeInTheDocument();
  });
});
