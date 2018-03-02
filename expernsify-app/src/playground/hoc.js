//Higher Order Component (HOC) - A component (HOC) that renders another component.
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
   <div>
      <h1>Info</h1>
      <p>The info is : {props.info}</p>
   </div>
);

const withAdminWarning = (WrappedComponent) =>{
   return (props) => (
      <div>
         {props.isAdmin && <p>this is private info.pls don't share</p>}
         <WrappedComponent {...props}/>
      </div>
   );
};

const requireAuthentication = (WrappedComponent) =>{
   return (props) => (
      <div>
         {
            props.isAhenticated ?
            (<WrappedComponent {...props}/>)
            : <p>Please login to view a info.</p>
         }

      </div>
   );
};

//requireAuthentication

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={false} info={"This is a detail."}/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAhenticated={false} info={"This is a detail."}/>, document.getElementById('app'));