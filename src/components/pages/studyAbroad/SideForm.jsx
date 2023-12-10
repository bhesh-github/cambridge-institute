// import { useState } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import DatePiker from "../../forAll/DatePiker";

const dateStr = new Date();
const year = dateStr.getFullYear();
const month = dateStr.getMonth();
const date = dateStr.getDate();
const formatedDate = `${year}-${month + 1}-${date}`;

const formInputsObj = {
  appointment_date: formatedDate,
  country: "",
};

const SideForm = ({
  setFormSubmitting,
  setSnackBarState,
  setAlertMessage,
  countriesList,
}) => {
  //   const { register, handleSubmit, reset } = useForm();
  // const [countriesListApi, setCountriesListApi] = useState();

  //   const [formInputs, setFormInputs] = useState(formInputsObj);

  // const fetchCountriesList = async () => {
  //     const res = await axios.get(
  //         import.meta.env.VITE_API_BASE_URL + "/api/nav/study-abroad"
  //     );
  //     const data = await res.data;
  //     setCountriesListApi(data);
  // };

  // const handleClick = (newState) => () => {
  //     setSnackBarState((prev) => ({ ...prev, open: true }));
  // };

  //   const fetchAppointmentPost = async (data) => {
  //     try {
  //       const url = new URL(
  //         `${import.meta.env.VITE_API_BASE_URL}/api/appointment/store?`
  //       );
  //       const res = await axios.post(url.toString(), data);
  //       setTimeout(() => {
  //         if (res.status === 200) {
  //           setAlertMessage((prev) => ({
  //             ...prev,
  //             messageState: true,
  //             successMessage: "Appointment Request Sent Successfully.",
  //           }));
  //           reset();
  //         } else {
  //           setAlertMessage((prev) => ({
  //             ...prev,
  //             messageState: false,
  //             failedMessage: "Something went wrong. Try again later.",
  //           }));
  //         }
  //         setFormSubmitting(false);
  //         setSnackBarState((prev) => ({
  //           ...prev,
  //           open: true,
  //         }));
  //         // handleClick({
  //         //     vertical: "bottom",
  //         //     horizontal: "center",
  //         // });
  //       }, 3000);
  //     } catch (error) {
  //       // console.error("Error:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     // fetchCountriesList();
  //   }, []);
  return (
    <form
      className="side-form"
      // onSubmit={
      //   handleSubmit((data) => {
      //     setFormSubmitting(true);
      //     try {
      //         data.appointment_date =
      //             formInputs &&
      //             formInputs.appointment_date &&
      //             formInputs.appointment_date;
      //         data.country =
      //             formInputs && formInputs.country
      //                 ? formInputs.country
      //                 : countriesListApi &&
      //                   countriesListApi[0] &&
      //                   countriesListApi[0].title &&
      //                   countriesListApi[0].title;
      //         fetchAppointmentPost(data);
      //     } catch (error) {}
      // })
      // }
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="head">Make your dreams of studying abroad come true..</h2>
      <div className="input-area">
        <input
          type="text"
          placeholder="Name"
          className="text-box"
          //   {...register("name", {
          //     required: true,
          //   })}
        />
        <input
          type="text"
          placeholder="Email"
          className="text-box"
          //   {...register("email", {
          //     required: true,
          //   })}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="text-box"
          //   {...register("phone", {
          //     required: true,
          //   })}
        />
        <select
          name={"btnName"}
          id="countries"
          className="select-btn"
          //   onChange={(e) => {
          //     setFormInputs((prev) => ({
          //       ...prev,
          //       country: e.target.value,
          //     }));
          //   }}
        >
          {countriesList &&
            countriesList.map((item, idx) => {
              const { title = "" } = item;

              return (
                <option key={idx} value={title} className="option">
                  {title}
                </option>
              );
            })}
        </select>
        <DatePiker
          isLabel="hide-label"
          dateType="study-abroad"
          label_name="Appointment Date*"
          //   setFormInputs={setFormInputs}
        />
      </div>
      <Button className="submit-btn" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SideForm;
SideForm.defaultProps = {
  countriesList: [
    {
      id: 0,
      title: "USA",
    },
    {
      id: 1,
      title: "Australia",
    },
    {
      id: 0,
      title: "UK",
    },
  ],
};
