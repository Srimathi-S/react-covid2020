import React, { Component } from 'react';
import './stateComponent.css';
class StateComponent extends Component {
    render() {
        console.log(this.props.statewiseCovidData);
        return (
            <div>
                <div className="overall-information">
                    <div className="information">
                        <p  id="total-confirmed">Total confirmed</p>
                        <p  id="total-confirmed">{this.props.totalConfirmed}</p>
                    </div>
                    <div className="information" >
                        <p id="total-active">Total Active</p>
                        <p id="total-active">{this.props.totalActive}</p>
                    </div>
                    <div className="information">
                        <p id="total-recovered">Total recovered</p>
                        <p id="total-recovered">{this.props.totalRecovered}</p>
                    </div>
                    <div className="information">
                        <p id="total-deceased">Total deceased</p>
                        <p id="total-deceased">{this.props.totalDeceased}</p>
                    </div>
                </div>
                <table>
                <thead>
                    <tr>
                    <td>State Name</td>
                    <td>Active cases</td>
                    <td>Confirmed cases</td>
                    <td>Recovered cases</td>
                    <td>Deceased cases</td>
                    </tr>
                </thead>
                <tbody>
                {this.props.statewiseCovidData.map((data)=>(
                    <React.Fragment key={data.stateName}>
                    <tr>
                        <td id="state-name">{data.stateName}</td>
                        <td><p>{data.recoveryRate}</p><p>{data.activeCases}</p></td>
                        <td>{data.confirmedCases}</td>
                        <td>{data.recoveredCases}</td>
                        <td>{data.deceasedCases}</td>
                    </tr>
                    </React.Fragment>
                ))}
                </tbody>
                </table>
            </div>
        );
    }
}

export default StateComponent;