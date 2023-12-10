import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

const MessageForm = ({
  setFormSubmitting,
  setAlertMessage,
  setSnackBarState,
  handleClick,
}) => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="message-form">
      <form
        className="input-form"
        onSubmit={handleSubmit((data) => {
          setFormSubmitting(true);
          try {
            // data.patientType = formInputs.patient_type;
            // data.gender = formInputs.gender;
            // data.department = selectBtnsInfo[0].value;
            // data.doctor = selectBtnsInfo[1].value;
            // data.appointment_date = formInputs.appointment_date;
            // data.dob = formInputs.dob;
            // setValue("doctor_name", value);
            // await fetchAppointmentPost(data);
            setTimeout(() => {
              // -----if successful-----------
              setAlertMessage((prev) => ({
                ...prev,
                successMessage: "You have successfully submitted your form.",
              }));
              setFormSubmitting(false);
              setSnackBarState((prev) => ({ ...prev, open: true }));
              handleClick({ vertical: "bottom", horizontal: "center" });
              reset();
            }, 2000);
            // fetchAppointmentPost(data);
          } catch (error) {}
        })}
      >
        <h2 className="form-head">SAY SOMETHING</h2>
        {/* <div className="input-and-label"> */}
        <input
          type="text"
          {...register("name", {
            required: true,
          })}
          placeholder="Your Name.."
          className="input-field"
        />
        {/* </div> */}
        <input
          {...register("email", {
            required: true,
          })}
          type="text"
          placeholder="Your Email.."
          className="input-field"
        />
        <input
          {...register("phone", {
            required: true,
          })}
          type="text"
          placeholder="Your Number.."
          className="input-field"
        />
        <textarea
          placeholder="Message.."
          className="textarea"
          id="w3review"
          name="w3review"
          rows="6"
          cols="50"
          {...register("message", {
            required: true,
          })}
        ></textarea>
        <Button className="submit-btn" type="submit">
          SEND
        </Button>
      </form>
    </div>
  );
};

export default MessageForm;
