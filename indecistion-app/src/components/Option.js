import React from 'react';
import ReactDOM from 'react-dom';

const Option = (props) =>( 
        <li key={props.key}> 
            {props.optionText}
            &nbsp;<button
             onClick={(e)=>{
                props.handleDeleteOption(props.optionText)
             }}
            >
                Remove
            </button>
        </li>
);

export default Option;

// class Option extends React.Component{
//     render() {
//         return(
//             <li key={this.props.key}> 
//                 {this.props.optionText}
//             </li>
//         );
//     }
// }
