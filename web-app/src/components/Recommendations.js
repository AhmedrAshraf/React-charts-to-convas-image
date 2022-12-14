import './static/css/recommendations.css';
import React, { Component } from 'react'


class Recommendations extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : [
                {id: '1',recommendation: 'Turn down the thermostat by one degree'},
                {id: '2',recommendation: 'Change to LED lightbulbs'},
                {id: '3',recommendation: 'Install motion sensors for turning off lights'},
                {id: '4',recommendation: 'Turn off computers when not in use'},
                {id: '5',recommendation: 'Turn down the thermostat by one degree'},
                {id: '6',recommendation: 'Insulate windows and doors with draft blockers'},
                {id: '7',recommendation: 'Close doors behind you'},
                {id: '8',recommendation: 'Bring a hoodie with you'},
                {id: '9',recommendation: 'Set timers to turn off appliances'},
                {id: '10',recommendation: 'Fill the kettle with the least ammount of water needed'},
                {id: '11',recommendation: 'Bleed radiators every month'},
                {id: '12',recommendation: 'Perform regular checks on appliances'},
                {id: '13',recommendation: 'Turn on heating only in areas where people are'},
                {id: '14',recommendation: 'Large groups of people warm up areas'},
                {id: '15',recommendation: 'Turn down the thermostat by one degree'},
                {id: '16',recommendation: 'Look into renewable energy!'},
                {id: '17',recommendation: 'Have proper roof and ceiling insulation'},
                {id: '18',recommendation: 'Minimize artificial lighting and make use of skylights'},
                {id: '19',recommendation: 'Plant shady trees outside your office'},
                {id: '20',recommendation: 'Use energy-saving features on devices'}
            ]
        }
    }
    
    renderData() {
        return this.state.data.map((data, index) => {
           const { recommendation } = data
           return (
                <div class="element">{recommendation}</div>
           )
        })
     }


    render(){
        return (  
        <div class="contentRow">
            <h1>Recommendations</h1>
            <div class="frame">
                <div class="center">
                    <div class="carousel">
                        <div class="change_outer">
                            <div class="change_inner">
                                {this.renderData()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
        }
    }

export default Recommendations;
