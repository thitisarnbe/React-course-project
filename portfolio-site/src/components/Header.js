import React from 'react';
import {NavLink} from 'react-router-dom';
import ContactPage from "./ContactPage";

export default () => (
   <header>
      <h1>Portfolio</h1>
      <NavLink to='/' exact={true} activeClassName={"is-active"}>Home</NavLink>&nbsp;
      <NavLink to='/portfolio' activeClassName={"is-active"}>Portfolio</NavLink>&nbsp;
      {/*<NavLink to='/edit' activeClassName={"is-active"}>Edit</NavLink>&nbsp;*/}
      <NavLink to='/contact' activeClassName={"is-active"}>Contact</NavLink>
   </header>
)
