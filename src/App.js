import React from 'react';
import './App.scss';
import './common/styles/common.scss';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Company from './components/Company/Company';
import Navi from './components/Navi/Navi';
import NotFound from './components/NotFound/NotFound';
import Menu from './components/Menu/Menu';
import MenuCategory from './components/Menu/MenuCategory';
import MenuItem from './components/Menu/MenuItem';
import Settings from './components/Settings/Settings';
import Venues from './components/Venues/Venues';
import Venue from './components/Venues/Venue/Venue'
import VenueLayout from './components/Venues/VenueLayout/VenueLayout';
import VenueFeed from './components/Venues/VenueFeed/VenueFeed';
import './services/apiService'


function App() {

  const browserHistory = createBrowserHistory();

  browserHistory.listen((location, action) => {
    window.scrollTo(0, 0);
  });

  return (

    <Router history={browserHistory}>
      <div className="app">
        <Navi></Navi>
        <div className="content">
          <div className="content-sub">
            <Switch>
              <Route exact path={"/"} render={() => {return(<Redirect to="/venues"></Redirect>)}} />
              <Route path={"/index.html"} component={() => {return(<Redirect from={"/index.html"} to={"/venues"} />)}} />
              <Route exact path={"/venues"} component={(props) => <Venues props={props} /> } />
              <Route path={"/venues/:id"} render={(props) => <Venue props={props} /> } />
              <Route exact path={"/menu"} component={(props) => <Menu props={props} /> } />
              <Route path={"/menu/category/:id"} render={(props) => <MenuCategory props={props} /> } />
              <Route path={"/menu/menu-item/:id"} render={(props) => <MenuItem props={props} /> } />
              <Route path={"/company"} component={Company} />
              <Route path={"/settings"} component={Settings} />
              <Route path={"/venue-layout"} component={() => {return(<VenueLayout/>)}} />
              <Route path={"/view-layout"} component={() => {return(<VenueLayout/>)}} />
              <Route path={"/venue-feed"} component={VenueFeed} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>   
  );
}

export default App;
