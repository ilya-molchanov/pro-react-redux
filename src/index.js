import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app'

import reducer from './reducer';

const store = createStore(reducer);


// document
//   .getElementById('inc')
//   .addEventListener('click', inc);
//   // .addEventListener('click', () => {
//   //   store.dispatch({type: 'INC'});
//   // });

// document
//   .getElementById('dec')
//   .addEventListener('click', dec);
//   // .addEventListener('click', () => {
//   //   store.dispatch({type: 'DEC'});
//   // });

// document
//   .getElementById('rnd')
//   .addEventListener('click', () => {
//     const payload =  Math.floor(Math.random()*10);
//     rnd(payload);
//     //store.dispatch({ type: 'RND', payload });
//   });

// const update = () => {
//   document
//     .getElementById('counter')
//     .innerHTML = store.getState();
// };

//const update = () => {
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
//};

// counter={store.getState()}
//       inc={inc}
//       dec={dec}
//       rnd={() => {
//         const value = Math.floor(Math.random()*10);
//         rnd(value);
//       }}

//update();

//store.subscribe(update);

// console.log(store.getState());
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// console.log(store.getState());