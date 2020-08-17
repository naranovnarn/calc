import React from 'react';

class CalcNumber extends React.Component {

  render() {
    const { number } = this.props;
    return (
      <div>
        <button onClick={() => this.props.handleClick(number)}>{number}</button>
      </div>
    );
  }

}

export default CalcNumber;