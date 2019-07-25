import React, { Component } from 'react';

class Scrawl extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.scrawl.title}</h1>
            </div>
        );
    }
}
export default Scrawl;