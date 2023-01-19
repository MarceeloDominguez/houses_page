import { HouseInterface } from "../interface/houseInterface";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  house: HouseInterface;
};

export default function House({ house }: Props) {
  const { name, image, maxPerson, description, price, id, pets } = house;

  return (
    <div className="shadow-lg min-h-[500px] group bg-card">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt="house-img"
        />
      </div>
      {/* details */}
      <div className="bg-card shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-third tracking-[1px] font-semibold text-xs">
        <div className="flex justify-between w-[85%]">
          {/* size */}
          <div className="flex items-center gap-x-2">
            <div>
              <MdOutlinePets className="text-[14px] text-secondary" />
            </div>
            <div className="flex gap-x-1">
              <p>{pets ? "with pets" : "no pets"}</p>
            </div>
          </div>
          {/* house capacity */}
          <div className="flex items-center gap-x-2">
            <div>
              <BsPeople className="text-[16px] text-secondary" />
            </div>
            <div className="flex gap-x-1 justify-end items-end text-end">
              <p>Max People</p>
              <h3>{maxPerson}</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* name & description */}
        <div className="text-center">
          <h3 className="h3 capitalize">{name}</h3>
          <p className="max-w-[300px] mx-auto mb-3 lg:mb-6 font-secondary tracking-[1px]">
            {description.slice(0, 100)}
          </p>
        </div>
        <Link
          to={`/house/${id}`}
          className="btn btn-secondary btn-sm max-w-[260px] mx-auto"
        >
          Book now from ${price}
        </Link>
      </div>
    </div>
  );
}
