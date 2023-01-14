import { useContextHouse } from "../context/HouseContext";
import House from "./House";

export default function Houses() {
  const { houses } = useContextHouse();

  return (
    <section className="py-24">
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