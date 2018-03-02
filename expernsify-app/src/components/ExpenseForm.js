import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
   state = {
      description: '',
      amount: 0,
      createdAt: moment(),
      note: '',
      calenderFocused:false
   }
   onDescriptionChange = (e) =>{
      const description = e.target.value;
      this.setState(() => ({description}));
   }
   onAmountChange = (e) =>{
      const amount = e.target.value;

      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      {
         this.setState(() => ({amount}));
      }

   }
   onNoteChange = (e) =>{
      const note = e.target.value;
      this.setState(() => ({note}));
   }

   onDateChange = (createdAt)=>{
      this.setState(() => ({createdAt}));
   }

   onFocusChange = ({focused}) =>{
      this.setState(() => ({calenderFocused:focused}));
   }
   render()
   {
      return (
         <div>
            <form>
               <div>
                  <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
               </div>
               <div>
                  <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
               </div>
               <div>
                  <SingleDatePicker
                     date={this.state.createdAt}
                     onDateChange={this.onDateChange}
                     focused={this.state.calenderFocused}
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}
                     isOutsideRange={()=> false}
                  />
               </div>
               <div>
                  <textarea placeholder="Add a noe for your expense (optional)" onChange={this.onNoteChange}></textarea>
               </div>
               <div>
                  <button>Add Expense</button>
               </div>
            </form>
         </div>
      )
   }
}