import {createStore} from 'Redux';

const store = createStore((state = {count: 0}, action) =>{

   switch (action.type)
   {
      case "SET":
         return {
            count: (typeof action.count === 'number' ? action.count : 1)
         }
         break;
      case "INCREMENT":
         const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
         return {
            count: state.count + incrementBy
         }
         break;
      case "DECREMENT":
         const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
         return {
            count: state.count - decrementBy
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

const unsubscribe = store.subscribe(() =>{
   console.log(store.getState());
});

store.dispatch({
   type: 'SET',
   count: 50
});


store.dispatch({
   type: 'INCREMENT',
   incrementBy: 5
});


store.dispatch({
   type: 'DECREMENT',
   decrementBy: 2
});

store.dispatch({
   type: 'INCREMENT'
});

store.dispatch({
   type: 'DECREMENT'
});

store.dispatch({
   type: 'INCREMENT'
});
