import { DateRange, RangeKeyDict } from "react-date-range";
import { CalendarProps } from "../../interfaces";

const index = ({
  dateRange,
  onChangeFunc = () => {},
  editableDateInputs,
  selectionColor = "#7b11d1",
  isPrioritary = false,
}: CalendarProps) => {
  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection;
    if (endDate && startDate) {
      if (endDate < startDate) {
        // Ajustar la fecha de fin para que sea igual a la fecha de inicio
        ranges.selection.startDate = endDate;
      }
    }
    onChangeFunc([
      {
        startDate:
          editableDateInputs && !isPrioritary
            ? ranges.selection.startDate || new Date()
            : dateRange[0]?.startDate || new Date(),
        endDate: ranges.selection.endDate || new Date(),
        key: "selection",
      },
    ]);
  };

  return (
    <div className="flex justify-center">
      <DateRange
        editableDateInputs={editableDateInputs}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
        rangeColors={[selectionColor]}
        className="w-full"
        onChange={(item) => {
          handleSelect(item);
        }}
        minDate={
          isPrioritary ? dateRange[0]?.startDate || new Date() : undefined
        }
      />
    </div>
  );
};

export default index;
