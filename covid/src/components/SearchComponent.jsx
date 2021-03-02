import React, { Component } from 'react';
import './searchComponent.css';
class SearchComponent extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Search state" onChange={this.props.modifyDisplayList.bind(this)}/>
            </div>
        );
    }
}

export default SearchComponent;