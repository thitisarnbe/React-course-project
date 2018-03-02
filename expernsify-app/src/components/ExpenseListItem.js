import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt,dispatch}) => (
   <div>
      <div className="list">
         <h3>{description}</h3>
         <p>{amount} - {createdAt}</p>&nbsp;
         <button onClick={() =>{
            dispatch(removeExpense({id}));
         }}>Remove
         </button>
      </div>
   </div>
);

export default connect()(ExpenseListItem);