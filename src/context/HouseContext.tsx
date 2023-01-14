import { createContext, ReactNode, useContext, useState } from "react";
import { houseData } from "../data/data";

interface House {
  id: number;
  name: string;
  description: string;
  size: number;
  maxPerson: number;
  price: number;
  image: string;
}

type HouseContextProps = {
  houses: House[];
};

type Props = {
  children: ReactNode;
};

const HouseContext = createContext({} as HouseContextProps);

export const HouseProvider = ({ children }: Props) => {
  const [houses, setHouses] = useState(houseData);

  return (
    <HouseContext.Provider value={{ houses }}>{children}</HouseContext.Provider>
  );
};

export const useContextHouse = () => {
  return useContext(HouseContext);
};
