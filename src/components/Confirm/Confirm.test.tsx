import { screen } from '@testing-library/react';
import Confirm from './Confirm';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';

const dataItem = mockData[0];

describe("Confirm component", () => {
  test('should render component correctly', () => {

    customRender(<Confirm data={dataItem}/>, mockDataProps);

    const okButton = screen.getByRole("button", { name: 'Yes'});
    expect(okButton).toBeInTheDocument();

    const noButton = screen.getByRole("button", { name: 'No'});
    expect(noButton).toBeInTheDocument();
  });
});
