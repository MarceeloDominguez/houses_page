interface Facilities {
  name: string;
  icon: JSX.Element;
}

export interface HouseInterface {
  id: number;
  name: string;
  description: string;
  maxPerson: number;
  price: number;
  image: string;
  pets: boolean;
  facilities: Array<Facilities>;
}
