import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import {addExpense} from "./actions/expenses";
import {setTextFilter, sortByDate} from "./actions/filters";

const store = configureStore();

store.dispatch(addExpense({description: "Gas bill", amount: 50, createdAt: 1000}));
store.dispatch(addExpense({description: "Water bill", amount: 200, createdAt: 1002}));
store.dispatch(addExpense({description: "Coffee", amount: 130, createdAt: 1003}));
store.dispatch(addExpense({description: "Electricity bill", amount: 600, createdAt: 1004}));
store.dispatch(addExpense({description: "Shoes", amount: 100, createdAt: 1000}));
store.dispatch(addExpense({description: "Rent", amount: 2000, createdAt: 1000}));

store.dispatch(setTextFilter('asdfasdfsdaf'))
store.dispatch(sortByDate('date'));
store.dispatch(setTextFilter(''))

//setTimeout(()=>{
//   store.dispatch(setTextFilter('Water'))
//},3000);

const state = store.getState();

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
