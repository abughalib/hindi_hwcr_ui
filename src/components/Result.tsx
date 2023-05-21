import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToUpload = () => {
    navigate("/upload", { state: { data: location.state.ocr } });
  };

  return (
    <div className="result flex-inline items-center">
      <h1>
        Predicted Character: <span>{location.state.data}</span>
      </h1>
      <a className="rounded button" onClick={navigateToUpload}>
        Try Another
      </a>
    </div>
  );
};

export default Result;
