import React from 'react';
import ReactDOM from 'react-dom';

const Option = (props) =>( 
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            &nbsp;<button
             onClick={(e)=>{
                props.handleDeleteOption(props.optionText)
             }}
             className="button button--link"
            >
                Remove
            </button>
        </div>
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
