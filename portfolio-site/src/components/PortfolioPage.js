import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () =>(
   <div>
      <h1>Portfolio</h1>
      <p>Checkout the stuff I've done</p>
      <Link to='/portfolio/1'>My work</Link>&nbsp;
      <Link to='/portfolio/2'>My plugins</Link>
   </div>
)

export default PortfolioPage;