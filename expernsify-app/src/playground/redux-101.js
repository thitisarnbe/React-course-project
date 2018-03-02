import {createStore} from 'Redux';

//Action generator

const setCount = ({count = 1} = {}) => ({
   type: "SET",
   count
});

const incrementCount = ({incrementBy = 1} = {}) => ({
   type: "INCREMENT",
   incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
   type: "DECREMENT",
   decrementBy
});

const resetCount = () => ({type: "RESET"});

// Reducers
// 1. Reducers are pure function
// 2. Never shange state or action

const countReducer = ((state = {count: 0}, action) =>{
   switch (action.type)
   {
      case "SET":
         return {
            count: (typeof action.count === 'number' ? action.count : 1)
         }
         break;
      case "INCREMENT":
         return {
            count: state.count + action.incrementBy
         }
         break;
      case "DECREMENT":
         return {
            count: state.count - action.decrementBy
         }
         break;
      case "RESET":
         return {
            count: 0
         }
         break;
      default:
         return state;
   }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
   console.log(store.getState());
});

//store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
//});

store.dispatch(setCount({count: 200}));
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(resetCount());