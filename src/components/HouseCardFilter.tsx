import { useState } from "react";
import { useContextHouse } from "../context/HouseContext";
import { listAdults, listKids } from "../data/listDropDown";
import CalendarSelect from "./CalendarSelect";
import PersonDropDown from "./PersonDropDown";

export default function HouseCardFilter() {
  const { adults, kids, handleClickAdults, handleClickKids, handleClick } =
    useContextHouse();

  const [selectedDateStart, setSelectedDateStart] = useState<Date | null>(
    new Date()
  );
  const [selectedDateEnd, setSelectedDateEnd] = useState<Date | null>(
    new Date()
  );

  return (
    <div className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex-1">
          <CalendarSelect
            selectedDate={selectedDateStart}
            setSelectedDate={setSelectedDateStart}
          />
        </div>
        <div className="flex-1">
          <CalendarSelect
            selectedDate={selectedDateEnd}
            setSelectedDate={setSelectedDateEnd}
          />
        </div>
        <div className="flex-1">
          <PersonDropDown
            title={adults}
            list={listAdults}
            handleClick={handleClickAdults}
          />
        </div>
        <div className="flex-1">
          <PersonDropDown
            title={kids}
            list={listKids}
            handleClick={handleClickKids}
          />
        </div>
        <button onClick={(e) => handleClick(e)} className="btn btn-primary">
          Check now
        </button>
      </div>
    </div>
  );
}
