import React from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import {Accordion, Grid, Sticky, Nav, NavBar} from '../src';

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
        <Grid>
          <div className={'uk-width-1-4'}>
            <Nav className='uk-nav-default uk-nav-parent-icon'>
              <li>
                <Link to='/'>One</Link>
              </li>
              <li className='uk-parent'>
                <Link to='/two'>Two</Link>
                <ul className='uk-nav-sub'>
                  <li><a>Sub One</a></li>
                  <li><a>Sub Two</a></li>
                  <li><a>Sub Three</a></li>
                </ul>
              </li>
              <li>
                <Link to='/three'>Three</Link>
              </li>
            </Nav>
          </div>
          <div className={'uk-width-3-4'}>
            <h1>
              React UIkit3 Demo
            </h1>
            <h2>
              Accordion
            </h2>
            <Accordion collapsible={false}>
              <li>
                <h3 className='uk-accordion-title'>
                  Accordion title 1
                </h3>
                <div className='uk-accordion-content'>
                  Accordion Text 1
                </div>
              </li>
              <li>
                <h3 className='uk-accordion-title'>
                  Accordion title 2
                </h3>
                <div className='uk-accordion-content'>
                  Accordion Text 2
                </div>
              </li>
              <li>
                <h3 className='uk-accordion-title'>
                  Accordion title 3
                </h3>
                <div className='uk-accordion-content'>
                  Accordion Text 3
                </div>
              </li>
            </Accordion>
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
