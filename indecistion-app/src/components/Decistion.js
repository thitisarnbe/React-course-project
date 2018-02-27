import React from 'react';
import ReactDOM from 'react-dom';

const Decistion = (props) =>{
    return(
        <div>
            {props.decision_txt && (
                <p>{props.decision_txt}</p>
            )}
        </div>
    );
};

export default Decistion;

// class Decistion extends React.Component{
//     render() {
//         return(
//             <div>
//                 {this.props.decision_txt && (
//                     <p>{this.props.decision_txt}</p>
//                 )}
//             </div>
//         );
//     }
// }
