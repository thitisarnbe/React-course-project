import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';

const Options = (props) =>{
    return(
        <div>
            <p>{(props.options.length > 0) ? 'Here are your option : '+props.options.length :'No options'}</p>
            <button onClick={props.handleDeleteOptions}>Remove All.</button>
            <ol>
                {
                   props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}
                        />
                   ))
                }
            </ol> 
        </div> 
    ); 
};
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