import Retry from "../assets/images/icon-retry.svg";
import Error from "../assets/images/icon-error.svg";
import "../css/ApiError.css";
import { Link } from "react-router-dom";
const ApiError = () => {
  return (
    <div className="main-error">
      <img src={Error} />
      <span className="error-title">Something went wrong</span>
      <p className="error-inform">
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <div className="btn">
        <Link className="btn" to={"/"}>
          <img src={Retry} alt="" />
          Retry
        </Link>
      </div>
    </div>
  );
};

export default ApiError;
