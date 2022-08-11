type Data = {
  key: number,
  name: string,
  description: string,
  createdDate: Date
} 

type ListProps = {
  data: Data[],
  removeItem: (key: number) => void
}

type ItemProps = {
  data: Data
  removeItem: (key: number) => void
  isShown?: boolean
}

type ModalProps = {
  closeModal: () => void,
  children?: JSX.Element
}

type FormProps = {
  saveForm: (name: string, description: string) => void
}