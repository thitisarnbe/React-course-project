import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default ()=>{
   //Store creation
   const store = createStore(combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
   }));

   return store;
}

//store.subscribe(() =>{
//   const state = store.getState();
//   const visibleExpense = getVisibleExpense(state.expenses, state.filters);
//
//   console.log(visibleExpense);
//});
