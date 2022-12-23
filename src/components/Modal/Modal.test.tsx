import { screen } from '@testing-library/react';
import Modal from './Modal';
import { mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';
import { TodoModalType } from '../../enums';
import userEvent from '@testing-library/user-event';

describe("Modal component", () => {
  test('should render component correctly', () => {

    const mockDataWithModal = {
      ...mockDataProps, initialModal: { isModalOpen: true, modalType: TodoModalType.SHOW }
    }
    const testMessage = <div>This is test message</div>;
    customRender(<Modal>{testMessage}</Modal>, mockDataWithModal);

    const text = screen.getByText("This is test message")
    expect(text).toBeInTheDocument();
  });

  test('should close modal when close button clicked', async () => {
    const closeModal = jest.fn();
    const mockDataWithModal = {
      ...mockDataProps, 
      initialModal: { isModalOpen: true, modalType: TodoModalType.SHOW },
      functions: { closeModal }
    };
    customRender(<Modal></Modal>, mockDataWithModal);

    const closeButton = screen.getByText('X');
    await userEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalled();
  });

  test('should close modal', async () => {
    const mockDataWithModal = {
      ...mockDataProps, 
      initialModal: { isModalOpen: true, modalType: TodoModalType.SHOW },
    };
    customRender(<Modal></Modal>, mockDataWithModal);

    const closeButton = screen.getByText('X');
    await userEvent.click(closeButton);
    expect(closeButton).not.toBeInTheDocument();
  });
});
