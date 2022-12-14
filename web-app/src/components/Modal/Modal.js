import {
  Category,
  ChartComponent,
  ChartAnnotation,
  DataLabel,
  Inject,
  Legend,
  Crosshair,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  AnnotationDirective,
  AnnotationsDirective,
} from "@syncfusion/ej2-react-charts";
import { classes } from "./Modal.css";
import { Browser } from "@syncfusion/ej2-base";

const Modal = ({ printRef, open, onClose, choosenOption, downloadImg }) => {
  if (!open) return null;

  const primaryYAxis = {
    labelFormat: "{value}k",
    rangePadding: "None",
    lineStyle: { width: 0 },
    // minimum: 0,
    // maximum: 300,
    // interval: 50,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  const primaryxAxis = {
    valueType: "Category",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 },
  };

  let content = "<div>Actual</div>";
  let content1 = "<div>Forecast</div>";
  const tooltip = {
    enable: true,
    shared: true,
    format: "${point.x} : <b>${point.y}",
    header: "<b>Site Electricity Demand</b>",
  };
  const legendSettings = { visible: true };
  const marker = { dataLabel: { visible: true } };
  const crosshair = {
    enable: false,
    line: {
      color: "rgba(204,214,235,0.25)",
      width: Browser.isDevice ? 50 : 20,
    },
    lineType: "Vertical",
  };

  const week_data = [
    { x: "01/01/2023", SED: 2270.802 },
    { x: "02/01/2023", SED: 3138 },
    { x: "03/01/2023", SED: 2825.893 },
    { x: "04/01/2023", SED: 2362.352 },
    { x: "05/01/2023", SED: 2495.744 },
    { x: "06/01/2023", SED: 2993.995 },
    { x: "07/01/2023", SED: 3371.923 },
  ];

  const week_prediction = [
    { x: "07/01/2023", SED: 3371.923 },
    { x: "08/01/2023", SED: 3381.923 },
    { x: "09/01/2023", SED: 3504.923 },
    { x: "10/01/2023", SED: 3637.923 },
    { x: "11/01/2023", SED: 3770.923 },
    { x: "12/01/2023", SED: 3903.923 },
    { x: "13/01/2023", SED: 4036.9233 },
    { x: "14/01/2023", SED: 4169.923 },
  ];

  const monthly_data = [
    { x: "01/01/2023", SED: 19458.709 },
    { x: "14/01/2023", SED: 25008.282 },
    { x: "21/01/2023", SED: 23008.282 },
    { x: "28/01/2023", SED: 31568.132 },
  ];

  const monthly_prediction = [
    { x: "28/01/2023", SED: 31568.132 },
    { x: "07/02/2023", SED: 31568.132 },
    { x: "14/02/2023", SED: 36206.574 },
    { x: "21/02/2023", SED: 41845.016 },
    { x: "28/02/2023", SED: 51394.589 },
  ];

  const yearly_data = [
    { x: "31/01/2023", SED: 31568.132 },
    { x: "28/02/2023", SED: 53925.442 },
    { x: "31/03/2023", SED: 44582.564 },
    { x: "30/04/2023", SED: 85485.659 },
    { x: "30/05/2023", SED: 80659.698 },
    { x: "20/06/2023", SED: 95236.665 },
    { x: "31/07/2023", SED: 103259.365 },
    { x: "30/08/2023", SED: 296532.33 },
    { x: "30/09/2023", SED: 153215.23 },
    { x: "30/10/2023", SED: 265326.123 },
    { x: "31/11/2023", SED: 255468.695 },
    { x: "30/12/2023", SED: 378817.584 },
  ];
  const yearly_prediction = [
    { x: "30/12/2023", SED: 378817.584 },
    { x: "31/01/2024", SED: 388817.584 },
    { x: "28/02/2024", SED: 407755.0383 },
    { x: "31/03/2024", SED: 436692.4927 },
    { x: "30/04/2024", SED: 465629.947 },
    { x: "30/05/2024", SED: 494567.40132 },
    { x: "20/06/2024", SED: 523504.8557 },
    { x: "31/07/2024", SED: 552442.31 },
    { x: "30/08/2024", SED: 581379.7643 },
    { x: "30/09/2024", SED: 610317.2186 },
    { x: "30/10/2024", SED: 639254.673 },
    { x: "31/11/2024", SED: 668192.1273 },
    { x: "30/12/2024", SED: 697129.5816 },
  ];

  function getPredictionData() {
    if (choosenOption.value == "Week") {
      return week_prediction;
    } else if (choosenOption.value == "Month") {
      return monthly_prediction;
    } else {
      return yearly_prediction;
    }
  }
  function getData() {
    // console.log('render image is called')
    if (choosenOption.value == "Week") {
      return week_data;
    } else if (choosenOption.value == "Month") {
      return monthly_data;
    } else {
      return yearly_data;
    }
  }
  console.log(choosenOption.value);

  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modalContainer">
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content"></div>
          <div ref={printRef}>
            <ChartComponent
              id="charts"
              primaryXAxis={primaryxAxis}
              legendSettings={legendSettings}
              primaryYAxis={primaryYAxis}
              tooltip={tooltip}
              crosshair={crosshair}
              marker={marker}
              width={Browser.isDevice ? "100%" : "75%"}
            >
              <Inject
                services={[
                  LineSeries,
                  DataLabel,
                  Tooltip,
                  Legend,
                  LineSeries,
                  Category,
                  Crosshair,
                  ChartAnnotation,
                ]}
              />
              <AnnotationsDirective>
                <AnnotationDirective
                  content={content}
                  region="Series"
                  x="15%"
                  y="55%"
                ></AnnotationDirective>
                <AnnotationDirective
                  content={content1}
                  region="Series"
                  x="65%"
                  y="30%"
                ></AnnotationDirective>
              </AnnotationsDirective>

              <SeriesCollectionDirective>
                <SeriesDirective
                  dataSource={getData()}
                  xName="x"
                  yName="SED"
                  width={2}
                  marker={{ visible: false, width: 7, height: 7 }}
                  type="Line"
                ></SeriesDirective>

                <SeriesDirective
                  dataSource={getPredictionData()}
                  xName="x"
                  yName="SED"
                  width={2}
                  marker={{
                    visible: false,
                    width: 7,
                    height: 7,
                    shape: "Diamond",
                  }}
                  dashArray="10"
                  type="Line"
                ></SeriesDirective>
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
          <button onClick={downloadImg}>download</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
