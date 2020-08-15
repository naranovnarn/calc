import React from 'react';
import { connect } from 'react-redux';
import { add_number, some_operation, get_result, add_clear } from '../redux/actionCreators';
import './Calc.css'

class Calc extends React.Component {

    add_number = (e) => {
      this.props.add_number(e.target.textContent);
    }

    some_operation = (e) => {
      this.props.some_operation(e.target.textContent);
    }

    get_result = () => {
      this.props.get_result()
    }
    add_clear = () => {
      this.props.add_clear()
    }

  
    render() {
  
      const state = JSON.stringify(this.props)
   
      console.log(this.props)
      return (
        <div style={{ textAlign: 'center'}}>
          <div>state:</div>
          <div>{state}</div>
          <div className="calcMain">
            <div className='row'> 
              <div>
                <button className="button" onClick={this.add_number}>1</button>
              </div>
              <div>
                <button className="button" onClick={this.add_number}>2</button>
              </div>
              <div>
                <button className="button" onClick={this.add_number}>3</button>
              </div>
              <div>
                <button className="button" onClick={this.some_operation}>+</button>
              </div>
            </div>
            <div className='row'> 
              <div>
                <button className="button" onClick={this.add_number}>4</button>
              </div>
              <div>
                <button className="button" onClick={this.add_number}>5</button>
              </div>
              <div>
                <button className="button" onClick={this.add_number}>6</button>
              </div>
              <div>
                <button className="button" onClick={this.some_operation}>-</button>
              </div>
            </div>
            <div className='row'> 
              <div>
                <button className="button" onClick={this.add_number}>7</button>
              </div>
              <div>
                <button className="button" onClick={this.add_number}>8</button>
              </div>
              <div>
                <button className="button" onClick={this.add_number}>9</button>
              </div>
              <div>
                <button className="button" onClick={this.some_operation}>*</button>
              </div>
            </div>
            <div className='row'> 
              <div>
                <button className="button" onClick={this.add_number}>.</button>
              </div>
              <div>
                <button className="button" onClick={this.add_number}>0</button>
              </div>
              <div>
                <button className="button" onClick={this.get_result}>=</button>
              </div>
              <div>
                <button className="button" onClick={this.some_operation}>/</button>
              </div>
            </div>
            <div className='row'> 
              <div>
                <button onClick={this.add_clear}>обнулить</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      tablo: state.tablo,
      operand1: state.operand1,
      operator: state.operator,
      result: state.result
  
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      add_number: (number) => {
        dispatch(add_number(number))
      },
      some_operation: (operator) => {
        dispatch(some_operation(operator))
      },
      get_result: () => {
        dispatch(get_result())
      },
      add_clear: () => {
        dispatch(add_clear())
      }
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Calc);