import './static/css/home.css';
import backDrop from "./static/images/homeBackDrop.png";
import { useAuthState } from "react-firebase-hooks/auth"; // Using the useAuthStateHook
import { auth } from "../firebaseConfig";
import { Chart } from "react-google-charts";
import Geocode from "react-geocode";


import Goals from "./Goals.js";
import Map from "./Map";
import { documentId } from 'firebase/firestore';
import Recommendations from './Recommendations';
// import { map } from '@firebase/util';


function Home() {
  const [user] = useAuthState(auth); // Implenetation of useAuthStateHook
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

  auth.currentUser.getIdTokenResult().then((id) => {
    // console.log(id);
    console.log(id.claims.admin);
  }); // This will return the current user


  Geocode.setApiKey("AIzaSyBtYIImGTFHEmtqutvW6zWP0okemopwExU");

  // Hardocded map data of all the buildings google has
  var addresses= ["2375 Garcia Ave, Mountain View, CA 94043, United States", 
  "1500 Salado Dr, Mountain View, CA 94043, United States", "1501 Salado Dr, Mountain View, CA 94043, United States", 
  "1945 Charleston Rd, Mountain View, CA 94043, United States", "1965 Charleston Rd, Mountain View, CA 94043, United States",
  "1950 Charleston Rd, Mountain View, CA 94043, United States", "1875 Charleston Rd, Mountain View, CA 94043, United States",
  "1900 Charleston Rd, Mountain View, CA 94043, United States", "2400 Amphitheatre Pkwy, Mountain View, CA 94043, United States",
  "1098 Alta Ave, Mountain View, CA 94043, United States", "1600 Amphitheatre Pkwy Building 42, Mountain View, CA 94043, United States",
  "1600 Amphitheatre Pkwy Building 43, Mountain View, CA 94043, United States", "1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States"]

  // this is the array that will be read by the map
  var mapData= [];

  //this function uses geocode to take string addresses and convert them into coordinates
  async function getAddress(address){
    var obj = {};
    await Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
          obj['lat'] = parseFloat(lat)
          obj['lng'] = parseFloat(lng)
      },
      (error) => {
        console.error(error);
      }
    );
    mapData.push(obj)
  }

  // for loop to go through every address to pass through the function
  for (var i = 0; i < addresses.length; i++) {
    getAddress(addresses[i])
  }
  
  return (
    <div className="hero is-fullheight has-background-grey-lighter">
      {/* code for the title of the dashboard */}
      <img src={backDrop} alt='backDrop' className='backDrop'/>
      <div className='welcomeTitle'>
        <h1>| Welcome back {user.email}</h1>
      </div>
      {/* end code for title of dashboard */}
      {/* Start the main body of the dashboard */}
      <div className="hero-body is-align-items-flex-start pt-1 home-body">
        <div className="container m-1">
          {/* make the columns wrap around and appear on multiple lines */}
          <div className="columns is-multiline is-mobile">
            {/* start container 1 */}
            <div className="column is-one-quarter">
              <div className="box home">
                <span className="icon is-left">
                  <i className="fas fa-2x fa-fa-solid fa-cloud-sun"></i>
                </span>
                <p>Current Temperature is 5ºC</p>
              </div>
            </div>
            {/* end container 1 */}
            {/* start container 2 */}
            <div className="column is-one-quarter">
              <div className="box home">
                <span className="icon is-left">
                  <i className="fa-solid fa-bolt fa-2x"></i>
                </span>
                <p>Currently using 210kWh of energy</p>
              </div>
            </div>
            {/* end container 2 */}
            {/* start container 3 */}
            <div className="column is-one-quarter">
              <div className="box home">
                <span className="icon is-left">
                  <i className="fa-solid fa-2x fa-fire"></i>
                </span>
                <p>Currently using 210kWh of heat</p>
              </div>
            </div>
            {/* end container 3 */}
            {/* start container 4 */}
            <div className="column is-one-quarter">
              <div className="box home">
                <code className="m-0">Currently:</code>
                <p>Exporting 632kWh of electricity</p>
              </div>
            </div>
            {/* end container 4 */}
            {/* start the first of the larger 2 container */}
            <div className="column">
              <div className="box home" id='chartArea'>
                <h1 className="title has-text-grey">Current: Import and Export of electricity</h1>
                <Chart
                  chartType="LineChart"
                  data={data}
                  options={options}
                  className="chart"
                  legendToggle
                />
              </div>
            </div>
            {/* end the first of the larger 2 container */}
            {/* start the second of the larger 2 container */}
            <div className="column">
              <div className="box home">
                <h1 className="title has-text-grey">Heat map</h1>
                <Map data={mapData} center={{ lat:37.422327, lng:-122.086160}} />
              </div>
            </div>
            {/* end the second of the larger 2 container */}
          </div>
        </div>
      </div>
      {/* page seperator */}
      <div className='seperator'>Weekly Goals</div>
      {/* start of goals */}
      <Goals></Goals>
      <Recommendations></Recommendations>
  </div>
  );
}

export default Home;
