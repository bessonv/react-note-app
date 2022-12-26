import { ProviderProps } from "../context/context.types";
import { ModalType } from "../enums";

export const mockData: Data[] = [
  { key: 0, name: 'read a book', description: 'book name Proin eu aliquam est. Donec elementum euismod ultricies. Donec ullamcorper nisl ac ipsum venenatis blandit. Donec mattis ac dui eget elementum. Proin dolor lacus, cursus vitae est vitae, euismod hendrerit ante. Etiam ut dignissim sem. Sed eu mauris purus. Sed tempor fringilla dignissim. Praesent urna nunc, sodales in sapien non, lacinia dignissim libero. Cras imperdiet dolor bibendum, consequat diam vel, fermentum velit.', created: new Date() },
  { key: 1, name: 'do a laundry', description: 'white clothes', created: new Date() },
  { key: 2, name: 'make dinner', description: 'order delivery', created: new Date() },
  { key: 3, name: 'exercise', description: 'with dumbbells', created: new Date() },
  { key: 4, name: 'watch a movie', description: 'movie title', created: new Date() },
  { key: 5, name: 'shopping', description: 'buy a shampoo', created: new Date() },
];

export const mockDataProps: ProviderProps = {
  initialList: {
    data: mockData,
    currentNoteItem: null
  },
  initialModal: {
    isModalOpen: false,
    modalType: ModalType.SHOW
  }
};
