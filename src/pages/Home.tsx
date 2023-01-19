import HeroSlider from "../components/HeroSlider";
import HouseCardFilter from "../components/HouseCardFilter";
import Houses from "../components/Houses";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="container mx-auto relative">
        <div className="mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">
          <HouseCardFilter />
        </div>
      </div>
      <Houses />
    </>
  );
}
