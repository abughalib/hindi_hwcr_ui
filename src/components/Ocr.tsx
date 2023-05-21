import { useNavigate } from "react-router-dom";
import "./Result.css";

const Ocr = () => {
  const navigate = useNavigate();
  const ocr = true;

  const navigateToUpload = () => {
    navigate("/upload", { state: { data: ocr } });
  };

  return (
    <div className="center">
      <h1 className="text-4xl font-bold">
        Hindi Optical Character Recognition
      </h1>
      <a
        className="bg-blue-500 hover:bg-blue-700 text-back font-bold py-2 px-4 rounded"
        onClick={() => {
          navigateToUpload();
        }}
      >
        Try It Now
      </a>
    </div>
  );
};

export default Ocr;
