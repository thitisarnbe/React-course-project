import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';

const Options = (props) => (
   <div>
      <div className="widget-header">
         <h3 className="widget-header__title">Your Options</h3>
         <button onClick={props.handleDeleteOptions} className="button button--link">Remove All.</button>
      </div>
         {props.options.length === 0 &&  <p className="widget__message">Please add option to get started!</p>}
         {
            props.options.map((option,index) => (
               <Option
                  key={option}
                  optionText={option}
                  count = {index+1}
                  handleDeleteOption={props.handleDeleteOption}

               />
            ))
         }
   </div>
);

export default Options;

// class Options extends React.Component{
//     render() {
//         return(
//             <div>
//                 <p>{(this.props.options.length > 0) ? 'Here are your option : '+this.props.options.length :'No options'}</p>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All.</button>
//                 <ol>
//                     {
//                         this.props.options.map((option) => <Option key={option} optionText={option} />)
//                     }
//                 </ol> 
//             </div> 
//         ); 
//     }
// }