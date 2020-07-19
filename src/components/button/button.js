import React from 'react';
import './button.css'

class Button extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {label: props.label};
    }

    dataFunction() {
        return 10;
    }

    atestfunction() {
        return 12;
    }

    render() {
        return(<div data-testid="button" className="button-style">Hi  {this.props.label}</div>)
    }
}

export default Button;
