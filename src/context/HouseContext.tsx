import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { houseData } from "../data/data";
import { HouseInterface } from "../interface/houseInterface";

type HouseContextProps = {
  houses: HouseInterface[];
  adults: string;
  kids: string;
  handleClickAdults: (value: string) => void;
  handleClickKids: (value: string) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
};

type Props = {
  children: ReactNode;
};

const HouseContext = createContext({} as HouseContextProps);

export const HouseProvider = ({ children }: Props) => {
  const [houses, setHouses] = useState(houseData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 kids");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClickAdults = (adults: string) => {
    setAdults(adults);
  };

  const handleClickKids = (kids: string) => {
    setKids(kids);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const newHouses = houseData.filter((house) => total <= house.maxPerson);

    setTimeout(() => {
      setHouses(newHouses.sort((a, b) => a.maxPerson - b.maxPerson));
      setLoading(false);
    }, 2000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        adults,
        kids,
        handleClickAdults,
        handleClickKids,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export const useContextHouse = () => {
  return useContext(HouseContext);
};
