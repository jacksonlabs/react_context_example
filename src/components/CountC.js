import React, { Component } from 'react';
import {MyContext} from '../MyContext';

class CountC extends Component {
  render() {
    return (
      <div className="countC">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Count C: {context.state.counterC}</p>
              <button onClick={context.countC}>Count C</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

export default CountC;
