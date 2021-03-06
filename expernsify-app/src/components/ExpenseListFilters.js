import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';

const ExpenseListFilters = (props) => (
   <div>
      <input type="text" value={props.filters.text} onChange={(e) =>{
         props.dispatch(setTextFilter(e.target.value));
      }}/>
      &nbsp;
      <select onChange={(e) =>{
         switch (e.target.value.toLowerCase())
         {
            case "date":
               props.dispatch(sortByDate());
               break;
            case "amount":
               props.dispatch(sortByAmount());
               break;
            default:
               return false;
         }
      }}>
         <option value="date">Date</option>
         <option value="amount">Amount</option>
      </select>
   </div>
);


const mapStateToProps = (state) =>{
   return {
      filters: state.filters
   };
}


export default connect(mapStateToProps)(ExpenseListFilters);