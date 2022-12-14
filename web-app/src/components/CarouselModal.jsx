import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Chart } from "react-google-charts";

function CarouselModal(props) {
    const data = [
        ["Age", "Import", "Export"],
        [1, 2, 0],
        [2, 4, 5],
        [3, 3, 2],
        [4, 5, 8],
        [5, 9, 6],
      ];
      const options = {
        curveType: "function",
        legend: { position: "bottom" },
      };
    return(
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>   
        <Chart
                  chartType="LineChart"
                  data={data}
                  options={options}
                  className="chart"
                  legendToggle
                />
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CarouselModal;