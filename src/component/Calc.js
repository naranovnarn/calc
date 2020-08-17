import React from 'react';
import { connect } from 'react-redux';
import { add_number, select_operation, get_result, clear } from '../redux/actionCreators';
import './Calc.css';
import CalcNumber from './CalcNumber';

class Calc extends React.Component {

    add_number = (number) => {
      this.props.add_number(number);
    }

    select_operation = (action) => {
      this.props.select_operation(action);
    }

    get_result = () => {
      this.props.get_result();
    }
    clear = () => {
      this.props.clear();
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
                <CalcNumber number="1" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="2" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="3" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="+" handleClick={this.select_operation} />
              </div>
            </div>
            <div className='row'> 
              <div>
                <CalcNumber number="4" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="5" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="6" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="-" handleClick={this.select_operation} />
              </div>
            </div>
            <div className='row'> 
              <div>
                <CalcNumber number="7" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="8" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="9" handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="*" handleClick={this.select_operation} />
              </div>
            </div>
            <div className='row'> 
              <div>
                <CalcNumber number="." handleClick={this.add_number} />
              </div>
              <div>
                <CalcNumber number="0" handleClick={this.add_number} />
              </div>
              <div>
                <button className="button" onClick={this.get_result}>=</button>
              </div>
              <div>
                <CalcNumber number="/" handleClick={this.select_operation} />
              </div>
            </div>
            <div className='row'> 
              <div>
                <CalcNumber number="C" handleClick={this.clear} />
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
      select_operation: (operator) => {
        dispatch(select_operation(operator))
      },
      get_result: () => {
        dispatch(get_result())
      },
      clear: () => {
        dispatch(clear())
      }
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Calc);