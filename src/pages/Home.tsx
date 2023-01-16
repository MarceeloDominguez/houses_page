import HouseCardFilter from "../components/HouseCardFilter";
import Houses from "../components/Houses";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-4 p-4">
          <HouseCardFilter />
        </div>
      </div>
      <Houses />
    </>
  );
}
