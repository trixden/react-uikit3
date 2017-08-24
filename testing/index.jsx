import React from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import {Grid, Sticky, NavBar, NavItem} from '../src';

class Html extends React.Component {
  render () {
    return (
      <div style={{minHeight: '300vh'}}>
        <Sticky showOnUp={true} animation={'uk-animation-slide-top'}>
          <NavBar dropbar={true} className={'uk-navbar-container'}>
            <div className={'uk-navbar-left'}>
              <ul className={'uk-navbar-nav'}>
                <li>
                  <Link to='/'>
                    One
                  </Link>
                </li>
                <li>
                  <Link to='/two'>
                    Two
                  </Link>
                  <div className='uk-navbar-dropdown'>
                    <ul className='uk-nav uk-navbar-dropdown-nav'>
                      <li>
                        <a>One</a>
                      </li>
                      <li>
                        <a>Two</a>
                      </li>
                      <li>
                        <a>Three</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='/three'>
                    Three
                  </Link>
                </li>
              </ul>
            </div>
          </NavBar>
        </Sticky>
        <h1>
          BEGIN
        </h1>
        <Grid firstColumn={'test'} margin={'test-margin'}>
          <div id={'selector'} className={'uk-width-1-2'}>
            Grid column left
          </div>
          <div className={'uk-width-1-2'}>
            Grid clumn right
          </div>
          <div className={'uk-width-1-2'}>
            Anither grid column
          </div>
        </Grid>
      </div>
    );
  }
};

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={Html} />
      <Route path='/two' component={Html} />
      <Route path='/three' component={Html} />
    </Router>
  ),
  document.getElementById('component')
);
