import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';

import Counter from './counter';

import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const { dispatch } = store;

const { inc, dec, rnd } =
  bindActionCreators(actions, dispatch);

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

const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random()*10);
        rnd(value);
      }}/>,
    document.getElementById('root'));
};

update();

store.subscribe(update);

// console.log(store.getState());
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// console.log(store.getState());