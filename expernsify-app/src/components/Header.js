import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
   <header>
      <h1>Expensify</h1>
      <NavLink to='/' exact={true} activeClassName={"is-active"}>Dashboard</NavLink>&nbsp;
      <NavLink to='/create' activeClassName={"is-active"}>Create</NavLink>&nbsp;
      {/*<NavLink to='/edit' activeClassName={"is-active"}>Edit</NavLink>&nbsp;*/}
      <NavLink to='/help' activeClassName={"is-active"}>Help</NavLink>
   </header>
)
