import './static/css/EFD.css';
import { Chart } from "react-google-charts";
import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

// hardcoded data values, same format however
export const data = [
  ["From", "To", "Weight"],
  ["Site_Electricity_Demand_(kW)","Import_Electricity_(kW)",  0],
  ["Site_Electricity_Demand_(kW)","CHP1_Electricity_Generation_(kW)", 1105.078125],
  ["Site_Electricity_Demand_(kW)","CHP2_Electricity_Generation_(kW)", 1487.98828125],
  ["Site_Heat_Demand_(kW)","CHP1_Heat_Output_(kW)", 1464.84375],
  ["Site_Heat_Demand_(kW)","CHP2_Heat_Output_(kW)", 2343.75],
  ["Site_Heat_Demand_(kW)","Boiler_Heat_Output_(kW)", 1674.41860465116],
  ["Site_Electricity_Demand_(kW)", "Export_Electricity_(kW)", 667.897075085991],
];

// options for the sankey diagram to change looks
export const options = {};


function EFD() {

    // using ref to select what to download as an image
    const ref = useRef(null);
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }
        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                //properties of the image
            const link = document.createElement('a');
            link.download = 'Energy_flow_diagram.png';
            link.href = dataUrl;
            link.click();
        })
            .catch((err) => {
            console.log(err);
        });
    }, [ref]);

  return (
    <div>
        <div class="grid-container">
            {/* buttons still not added just for looks */}
            <button class="grid-item">Day</button>
            <button class="grid-item">Weekly</button>
            <button class="grid-item">Monthly</button>
            <button class="grid-item">Yearly</button>
        </div>
        <div className="column">
        <div className="box home" ref={ref} >
        <h1 className="title has-text-grey">Energy flow diagram</h1>
        <Chart
            chartType="Sankey"
            width="90%"
            height="450px"
            data={data}
            options={options}
            />
        </div>
        <button id='capture' onClick={onButtonClick }>Download</button>
    </div>
  </div>
  );
}

export default EFD;
