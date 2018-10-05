import React, { Component } from 'react';
import { Button, Input } from '../common';
import { composeButtonData } from '../../data';

class Compose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonData: composeButtonData,
      sent: false,
      message: '',
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      sent: true,
    });
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const { buttonData, message, sent } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div className="compose">
        <Input
          handleChange={handleChange}
          value={message}
          className="compose__input"
          type="text"
          name="compose__input"
        />
        {buttonData.map(item =>
          (<Button
            disabled={sent}
            label={item.label}
            icon={item.icon}
            key={item.label}
            handleClick={handleClick}
          />))}
      </div>);
  }
}


export { Compose };
