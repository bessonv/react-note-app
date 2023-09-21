type Data = {
  key: string,
  name: string,
  description: string,
  created: Date
}

type NewData = Omit<Data, "key">;
