import { screen } from '@testing-library/react';
import AddForm from './AddForm';
import { mockData, mockDataProps } from '../../mocks/mockData';
import { customRender } from '../../mocks/customRender';
import userEvent from '@testing-library/user-event';

const dataItem = mockData[0];

describe("AddForm component", () => {
  test('should render component correctly', () => {

    customRender(<AddForm note={dataItem}/>, mockDataProps);

    const nameInput = screen.getByRole("textbox", { name: 'Name:'} );
    expect(nameInput).toBeInTheDocument();
    const descriptionInput = screen.getByRole("textbox", { name: 'Description:'} );
    expect(descriptionInput).toBeInTheDocument();
  });

  test('should filled input with data', () => {
    customRender(<AddForm note={dataItem}/>, mockDataProps);

    const name = screen.queryByDisplayValue(dataItem.name);
    const description = screen.queryByText(dataItem.description);
    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('should close modal on cancel click', async () => {
    const closeModal = jest.fn();
    const mockData = { ...mockDataProps, functions: { closeModal }};
    customRender(<AddForm />, mockData);

    const cancelButton = screen.getByDisplayValue("cancel");
    await userEvent.click(cancelButton);
    expect(closeModal).toBeCalled();
  });

  test('should edit todo on save click', async () => {
    const editNote = jest.fn();
    const mockData = { ...mockDataProps, functions: { editNote }};
    customRender(<AddForm note={dataItem}/>, mockData);

    const submit = screen.getByDisplayValue("save");
    const name = screen.getByDisplayValue(dataItem.name);
    const description = screen.getByText(dataItem.description);

    const testStr = { name: 'test', description: 'test description' };
    await userEvent.clear(name);
    await userEvent.type(name, testStr.name);
    await userEvent.clear(description);
    await userEvent.type(description, testStr.description);
    await userEvent.click(submit);

    expect(editNote).toHaveBeenCalledWith({
      ...dataItem, 
      name: testStr.name, 
      description: testStr.description 
    });
  });

  test('should add todo on save click', async() => {
    const addNote = jest.fn();
    const mockData = { ...mockDataProps, functions: { addNote }};
    customRender(<AddForm />, mockData);

    const submit = screen.getByDisplayValue("save");
    const name = screen.getByRole("textbox", { name: 'Name:'} );
    const description = screen.getByRole("textbox", { name: 'Description:'} );

    const testStr = { name: 'test', description: 'test description' };
    await userEvent.type(name, testStr.name);
    await userEvent.type(description, testStr.description);
    await userEvent.click(submit);

    expect(addNote).toHaveBeenCalledWith(testStr.name, testStr.description);
  })
});
