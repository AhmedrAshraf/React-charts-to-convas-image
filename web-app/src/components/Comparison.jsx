import React from "react";
import Table from 'react-bootstrap/Table';
import DropdownComponent from "./DropdownComponent";

function Comparison(){
    return(
        <div>
            <h1> 
                Comparison
            </h1>
            
            <div style={{ padding:"5rem",display: "flex", gap: "3rem", justifyContent: "center" }}>
            <Table striped bordered hover  >
      <thead >
        <tr >
          {/* First Dropdown defaulted to first month in the array; Last Dropdown defaulted to last month in the array */}
          <th style={{ textAlign: "center"}} > <DropdownComponent selected={0} /> </th>
          <th style={{ textAlign: "center"}} >Usage</th>
          <th style={{ textAlign: "center"}} > <DropdownComponent selected={11}/></th>
        </tr>
      </thead>
      <tbody >
        <tr>
          
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
         
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
        </div>
        </div>
    );
}

export default Comparison;