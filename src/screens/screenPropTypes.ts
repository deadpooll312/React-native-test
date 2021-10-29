export interface IItemScreenProps {
  name: string,
  image: string
  route: any
}

export interface IListScreenItemProps {
  data: {
    name: string;
    image: string;
  }
  onClick: () => void;
}
