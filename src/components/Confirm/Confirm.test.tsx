import { screen } from '@testing-library/react';
import Confirm from './Confirm';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';
import userEvent from '@testing-library/user-event';

const dataItem = mockData[0];

describe("Confirm component", () => {
  test('should render component correctly', () => {

    customRender(<Confirm data={dataItem}/>, mockDataProps);

    const okButton = screen.getByRole("button", { name: 'Yes' });
    expect(okButton).toBeInTheDocument();

    const noButton = screen.getByRole("button", { name: 'No' });
    expect(noButton).toBeInTheDocument();
  });

  test('should delete element on yes', async () => {
    const deleteNote = jest.fn();
    const mockData = { ...mockDataProps, functions: { deleteNote }};

    customRender(<Confirm data={dataItem}/>, mockData);

    const okButton = screen.getByRole("button", { name: 'Yes' });
    await userEvent.click(okButton);
    expect(deleteNote).toHaveBeenCalledWith(dataItem.key);
  });

  test('should close modal on no', async () => {
    const closeModal = jest.fn();
    const mockData = { ...mockDataProps, functions: { closeModal }};

    customRender(<Confirm data={dataItem}/>, mockData);

    const noButton = screen.getByRole("button", { name: 'No' });
    await userEvent.click(noButton);
    expect(closeModal).toHaveBeenCalled();
  });
});
