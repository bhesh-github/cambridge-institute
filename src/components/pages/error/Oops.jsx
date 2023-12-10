import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import boy from "../../../images/error/error-boy.png";

const Oops = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, []);

  return (
    <div className="no-page">
      <img src={boy} alt="" className="boy" />
      Sorry,
      <p>Page Not Found!!!</p>
    </div>
  );
};

export default Oops;

{
  /* <img src={img} alt="" className="oops-img" /> */
}
{
  /* <div className="img-bg">
</div> */
}
