import { Form } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const BASE_URL = "https://5e88-202-142-81-154.ngrok-free.app";
  const location = useLocation();
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const uploadFile = async () => {
    if (!file) return;

    let url = BASE_URL;

    if (location.state.data) {
      url += "/ocr";
    } else {
      url += "/hwrc";
    }

    // Mutlipart form data
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);

    let predicted = "";

    if (location.state.data) {
      predicted = data["ocr_text"];
    } else {
      predicted = data["predicted_handwriting"];
    }

    navigate("/result", {
      state: { data: predicted, ocr: location.state.data },
    });
  };

  return (
    <div className="form rounded-md shadow-lg">
      <Form action="" method="post" encType="multipart/form-data">
        <label className="block">
          <span className="block text-sm font-medium">Select File</span>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files![0])}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <div className="mt-6 text-right">
          <button
            className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
            type="button"
            onClick={uploadFile}
          >
            Upload
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Upload;
