import React, { Component } from 'react';

class SearchComponent extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search state" onChange={this.props.modifyDisplayList.bind(this)}/>
            </div>
        );
    }
}

export default SearchComponent;