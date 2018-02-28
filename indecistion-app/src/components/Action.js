import React from 'react';
import ReactDOM from 'react-dom';

//Add Remove All Buttons
const Action = (props) =>(
    <div>  
        <button onClick={props.handlePickOptions} disabled={!props.hasOptions} className="big-button">What should I do?</button>
    </div>
);

export default Action;

// class Action extends React.Component{
//     render() {
//         return(
//             <div> 
//                 <button onClick={this.props.handlePickOptions} disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         );
//     }
// } 
