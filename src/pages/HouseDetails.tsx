import React, { useState } from "react";
import { useContextHouse } from "../context/HouseContext";
import { useParams } from "react-router-dom";
import CalendarSelect from "../components/CalendarSelect";
import PersonDropDown from "../components/PersonDropDown";
import { listAdults, listKids } from "../data/listDropDown";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ScrollToTop from "../helpers/ScrollToTop";

export default function HouseDetails() {
  const [selectedDateStart, setSelectedDateStart] = useState<string | Date>("");
  const [selectedDateEnd, setSelectedDateEnd] = useState<string | Date>("");

  const { houses, adults, handleClickAdults, kids, handleClickKids } =
    useContextHouse();
  const { id } = useParams();

  const house = houses.find((house) => house.id === Number(id));

  const { name, description, image, facilities, price, pets } = house!;

  return (
    <section>
      <ScrollToTop />
      <div className="bg-house h-[600px] bg-cover bg-center relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70" />
        <h1 className="text-6xl text-slate-50 z-20 font-primary text-center capitalize">
          {name}
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2 capitalize">{name}</h2>
            <p className="mb-8 font-secondary tracking-[1px]">{description}</p>
            <img className="mb-8" src={image} alt="image" />
            <div className="mt-12">
              <h3 className="h3 mb-3">House Facilities</h3>
              <p className="mb-12 font-secondary tracking-[1px]">
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with
              </p>
              {/* grid icons */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-x-3 flex-1"
                    >
                      <p className="text-3xl text-primary">{icon}</p>
                      <div className="text-base font-third">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="lg:w-[40%] w-full h-full">
            <div className="py-8 px-6 bg-primary/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3 className="font-third font-bold">Your Reservation</h3>
                <div className="h-[60px]">
                  <CalendarSelect
                    title="Check in"
                    selectedDate={selectedDateStart}
                    setSelectedDate={setSelectedDateStart}
                  />
                </div>
                <div className="h-[60px]">
                  <CalendarSelect
                    selectedDate={selectedDateEnd}
                    setSelectedDate={setSelectedDateEnd}
                    title="Check out"
                  />
                </div>
                <div className="h-[60px]">
                  <PersonDropDown
                    title={adults}
                    list={listAdults}
                    handleClick={handleClickAdults}
                  />
                </div>
                <div className="h-[60px]">
                  <PersonDropDown
                    title={kids}
                    list={listKids}
                    handleClick={handleClickKids}
                  />
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-full">
                Book now for ${price}
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className="h3">House Rules</h3>
              <p className="mb-6 font-secondary tracking-[1px]">
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4 font-third">
                  <FaCheck className="text-primary" />
                  Check-in 08:00 AM - 11:00 AM
                </li>
                <li className="flex items-center gap-x-4 font-third">
                  <FaCheck className="text-primary" />
                  Check-out 10:00 PM
                </li>
                <li className="flex items-center gap-x-4 font-third">
                  {pets ? (
                    <FaCheck className="text-primary" />
                  ) : (
                    <ImCross className="text-primary" />
                  )}
                  {pets ? "Pets" : "No Pets"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
