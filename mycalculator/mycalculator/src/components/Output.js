import React from "react";

export default class Output extends React.Component {

    render() {

        return(
            <div className="outputDisplay">
            <p>{this.props.result}</p>
            </div>
            );
    }
}