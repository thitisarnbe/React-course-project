import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title:'Some default'
}

export default Header;
// class Header extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
