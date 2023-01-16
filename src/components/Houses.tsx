import { useContextHouse } from "../context/HouseContext";
import House from "./House";
import { SpinnerRoundFilled } from "spinners-react";

export default function Houses() {
  const { houses, loading } = useContextHouse();

  return (
    <section className="py-24">
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/80 w-full z-50 flex justify-center items-center">
          <SpinnerRoundFilled color="white" />
        </div>
      )}
      <div className="container mx-auto lg:px-0">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {houses.map((house) => (
            <House key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
}
