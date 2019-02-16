import React, { Component } from 'react';

import {MyContext} from './MyContext';
import CountC from './components/CountC';

class MyProvider extends Component {
  state = {
    counterA: 0,
    counterB: 0,
    counterC: 0
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        countA: () => this.setState({
          counterA: this.state.counterA + 1
        }),
        countB: () => this.setState({
          counterB: this.state.counterB + 1
        }),
        countC: () => this.setState({
          counterC: this.state.counterC + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Middle = (props) => (
  <div className="middle">
    <CountA />
  </div>
)

class CountA extends Component {
  render() {
    return (
      <div className="counta">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <button onClick={context.countA}>Count A</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class CountB extends Component {
  render() {
    return (
      <div className="countb">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Count B: {context.state.counterB}</p>
              <button onClick={context.countB}>Count B</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class CounterDisplays extends Component {
  render() {
    return (
      <div className="displays">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Count A: {context.state.counterA}</p>
              <p>Count B: {context.state.counterB}</p>
              <p>Count C: {context.state.counterC}</p>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <MyContext.Consumer>
            {(context) => (
              <p>Count A: {context.state.counterA}</p>
            )}
          </MyContext.Consumer>
          <Middle />
          <CountB />
          <CountC />
          <CounterDisplays />
        </div>
      </MyProvider>
    );
  }
}

export default App;