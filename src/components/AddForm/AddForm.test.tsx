import { screen } from '@testing-library/react';
import AddForm from './AddForm';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';

const dataItem = mockData[0];

describe("AddForm component", () => {
  test('should render component correctly', () => {

    customRender(<AddForm todo={dataItem}/>, mockDataProps);

    const nameInput = screen.getByRole("textbox", { name: 'Name:'} );
    expect(nameInput).toBeInTheDocument();
    const descriptionInput = screen.getByRole("textbox", { name: 'Description:'} );
    expect(descriptionInput).toBeInTheDocument();
  });
});
