import Modal from "./Modal/Modal";
import "./EFX.css";
import React, { useState } from "react";
// import Dropdown from "./Drop-down/Dropdown";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import html2canvas from "html2canvas";

function CostForecast() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setOption] = useState(0);
  const ref = React.useRef();

  const options = [
    { value: "Year", label: "Year" },
    { value: "Month", label: "Month" },
    { value: "Week", label: "Week" },
  ];

  const downloadImg = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div>
      <br />
      <h1>Generate Energy Cost Forecast</h1>
      <div className="box-EFC">
        <label>Choose a time frame:</label>
        <div className="App">
          <Dropdown
            options={options}
            onChange={(e) => setOption(e)}
            placeholder="Select an option"
            className="dropDOwn"
          />
        </div>
        <button onClick={() => setOpenModal(true)} className="modalButton">
          Generate
        </button>
        <Modal
          printRef={ref}
          open={openModal}
          onClose={() => setOpenModal(false)}
          choosenOption={selectedOption}
          downloadImg={downloadImg}
        />
      </div>
    </div>
  );
}

export default CostForecast;
