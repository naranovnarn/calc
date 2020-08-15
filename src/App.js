import React from 'react';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import Main from './component/Calc'


const store = createStore(reducer);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}


export default App;
