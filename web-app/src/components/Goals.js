import './static/css/home.css';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

function Goals() {

  // energy usage progress bar
  const energyUsage_props = {
    percent: 50, // is require
    colorSlice: "#018ed0",
    colorCircle: "#70a044",
    fontColor: "#FFFFF",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 200,
    stroke: 10,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: false,
    number: true,
  };
  // carbon emissions progress bar
  const carbonEmissions_props = {
    percent: 50, // is require
    colorSlice: "#018ed0",
    colorCircle: "#70a044",
    fontColor: "#FFFFF",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 200,
    stroke: 10,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: false,
    number: true,
  };
  // energy cost progress bar
  const energyCosts_props = {
    percent: 100, // is require
    colorSlice: "#018ed0",
    colorCircle: "#70a044",
    fontColor: "#FFFFF",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 200,
    stroke: 10,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: false,
    number: true,
  };

  return (  
    <div className="hero-body is-align-items-flex-start pt-1 home-body">
        <div className="container m-1">
            {/* make the columns wrap around and appear on multiple lines */}
            <div className="columns">
                {/* start container 1 */}
                <div className="column">
                    <div className="box home">
                        <h2 className="title has-text-grey">Energy Usage</h2>
                        <h5>20,000kW</h5>
                        <div className='progress-bar'>
                            <CircularProgressBar {...energyUsage_props} />
                        </div>
                        <form>
                            <label>
                                <input type="text" placeholder='Change the weekly goal' />
                            </label>
                            <button>Update</button>
                        </form>
                    </div>
                </div>
                {/* end container 1 */}
                {/* start container 2 */}
                <div className="column">
                    <div className="box home">
                        <h2 className="title has-text-grey">CO2 Emissions</h2>
                        <h5>20,000kW</h5>
                        <div className='progress-bar'>
                            <CircularProgressBar {...carbonEmissions_props} />
                        </div>
                        <form>
                            <label>
                                <input  type="text" placeholder='Change the weekly goal' />
                            </label>
                            <button>Update</button>
                        </form>
                    </div>
                </div>
                {/* end container 2 */}
                {/* start container 3 */}
                <div className="column">
                    <div className="box home">
                        <h2 className="title has-text-grey">Energy Costs</h2>
                        <h5>20,000kW</h5>
                        <div className='progress-bar'>
                            <CircularProgressBar {...energyCosts_props} />
                        </div>
                        <form>
                            <label>
                                <input type="text" placeholder='Change the weekly goal' />
                            </label>
                            <button>Update</button>
                        </form>
                    </div>
                </div>
                {/* end container 3 */}
            </div>
        </div>
    </div>
  );
}

export default Goals;
