import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";

type Props = {
  selectedDate: Date | string;
  setSelectedDate: (date: Date | string) => void;
  title: string;
};

export default function CalendarSelect({
  selectedDate,
  setSelectedDate,
  title,
}: Props) {
  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-base text-secondary" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={selectedDate ? new Date(selectedDate) : null}
        placeholderText={title}
        onChange={(date: Date) => setSelectedDate(date)}
        locale="es"
        dateFormat="P"
      />
    </div>
  );
}
