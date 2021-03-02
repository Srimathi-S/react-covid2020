import React, { Component } from 'react';

class StateComponent extends Component {
    render() {
        console.log(this.props.statewiseCovidData);
        return (
            <div>
                <div>
                    <div>
                        <p>Total confirmed</p>
                        <p>{this.props.totalConfirmed}</p>
                    </div>
                    <div>
                        <p>Total Active</p>
                        <p>{this.props.totalActive}</p>
                    </div>
                    <div>
                        <p>Total recovered</p>
                        <p>{this.props.totalRecovered}</p>
                    </div>
                    <div>
                        <p>Total deceased</p>
                        <p>{this.props.totalDeceased}</p>
                    </div>
                </div>
                <table>
                <tbody>
                {this.props.statewiseCovidData.map((data)=>(
                    <tr>
                        <td>{data.stateName}</td>
                        <td>{data.activeCases}</td>
                        <td>{data.confirmedCases}</td>
                        <td>{data.recoveredCases}</td>
                        <td>{data.deceasedCases}</td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        );
    }
}

export default StateComponent;