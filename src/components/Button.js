import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <a  className="button is-primary is-rounded"
                onClick={this.props.onClickHandler}
                >
                  {this.props.buttonText}
            </a>
        )
    }
}
