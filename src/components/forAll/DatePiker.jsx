import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const dateStr = new Date();
const year = dateStr.getFullYear();
const month = dateStr.getMonth();
const date = dateStr.getDate();

export default function ResponsiveDatePickers({
  label_name,
  setFormInputs,
  dateType,
  isLabel,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {dateType === "study-abroad" && (
        <div className="datepiker">
          {isLabel !== "hide-label" && <label>{label_name}</label>}
          <DatePicker
            defaultValue={dayjs(`${year}-${month + 1}-${date}`)}
            className="date-piker"
            // onChange={(selectedDate) => {
            //     const sYear = selectedDate.$y;
            //     const sMonth = selectedDate.$M;
            //     const sDate = selectedDate.$D;
            //     // setFormInputs((prev) => ({
            //     //     ...prev,
            //     //     appointment_date: `${sYear}-${
            //     //         sMonth + 1
            //     //     }-${sDate}`,
            //     // }));
            // }}
          />
        </div>
      )}
        </LocalizationProvider>
  );
}
