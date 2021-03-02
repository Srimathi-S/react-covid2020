import React, { Component } from 'react';
import axios from 'axios';
import state from './state';
import StateComponent from './StateComponent';
import SearchComponent from './SearchComponent';
class HomeComponent extends Component {
    constructor()
    {
        super();
        this.state={
            statewiseCovidData:[],
            displayData:[],
            totalActive:0,
            totalConfirmed:0,
            totalRecovered:0,
            totalDeceased:0
        }
    }
    componentDidMount=()=>{
        let totalActive=0;
        let totalConfirmed=0;
        let totalRecovered=0;
        let totalDeceased=0;
        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then((response)=>{
            let covidData=response.data;
            let statewiseCovidData=[];
            statewiseCovidData=state.map((stateName,index)=>{
                let districtData=Object.values(covidData[stateName]['districtData']);
                let activeCases=districtData.reduce((previous,data)=>previous+data.active,0);
                totalActive+=activeCases;
                let confirmedCases=districtData.reduce((previous,data)=>previous+data.confirmed,0);
                totalConfirmed+=confirmedCases;
                let recoveredCases=districtData.reduce((previous,data)=>previous+data.recovered,0);
                totalRecovered+=recoveredCases;
                let deceasedCases=districtData.reduce((previous,data)=>previous+data.deceased,0);
                totalDeceased+=deceasedCases;
                let stateCovidInformation={
                    stateName:stateName,
                    activeCases:activeCases,
                    confirmedCases:confirmedCases,
                    recoveredCases:recoveredCases,
                    deceasedCases:deceasedCases
                }
                return stateCovidInformation;
            });
           // console.log(statewiseCovidData);
            this.setState({
                statewiseCovidData:[...statewiseCovidData],
                displayData:[...statewiseCovidData],
                totalActive:totalActive,
                totalConfirmed:totalConfirmed,
                totalRecovered:totalRecovered,
                totalDeceased:totalDeceased
            });
        })
        .catch((error)=>console.log(error));
    }
    modifyDisplayList=(event)=>{
        let searchText=event.target.value;
        let modifiedDisplayData=this.state.statewiseCovidData.filter((data)=>data.stateName.toUpperCase().includes(searchText.toUpperCase()));
        this.setState({
            displayData:modifiedDisplayData
        })
    }
    render() {
        return (
            <div>
                <SearchComponent modifyDisplayList={(event)=>this.modifyDisplayList(event)}/>
                <StateComponent statewiseCovidData={this.state.displayData} totalActive={this.state.totalActive} totalConfirmed={this.state.totalConfirmed} totalRecovered={this.state.totalRecovered} totalDeceased={this.state.totalDeceased}/>
            </div>
        );
    }
}

export default HomeComponent;