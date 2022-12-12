import { screen } from '@testing-library/react';
import Modal from './Modal';
import { mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';
import { TodoModalType } from '../../enums';

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
});
