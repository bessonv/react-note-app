type Data = {
  key: number,
  name: string,
  description: string,
  createdDate: Date
} 

type ListProps = {
  data: Data[],
  removeItem: (key: number) => void
  showItem: (key: number) => void
}

type ItemProps = {
  data: Data
  removeItem: (key: number) => void
  showItem: (key: number) => void
  isShown?: boolean
}

type ModalProps = {
  closeModal: () => void,
  children?: React.ReactNode
  // children?: JSX.Element
}

type FormProps = {
  saveForm: (name: string, description: string) => void
}

type DisplayProps = {
  data?: Data | null
}