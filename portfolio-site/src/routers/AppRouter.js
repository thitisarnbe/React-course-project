import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';

const AppRouter = ()=>(
   <BrowserRouter>
      <div>
         <div>
            <Header />
         </div>
         <Switch>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/portfolio" exact={true} component={PortfolioPage}/>
            <Route path="/portfolio/:id" exact={true} component={PortfolioItemPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route  component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>

);

export default AppRouter;