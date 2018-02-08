import React from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import {Accordion, Alert, Cover, Grid, Sticky, Lightbox, Nav, NavBar, Spinner, Icon, Slideshow} from '../src';

class Html extends React.Component {
  render () {
    return (
      <div style={{minHeight: '300vh'}}>
        <Sticky showOnUp={true} animation={'uk-animation-slide-top'}>
          <NavBar className={'uk-navbar-container'}>
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
          <div className='uk-width-3-4'>
            <div className='uk-container'>
              <div className='uk-cover-container uk-height-medium'>
                <Cover type='image' src='http://lorempixel.com/1920/550/' />
              </div>
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
              <h2>
                Alert
              </h2>
              <Alert className='uk-alert-success'>
                <a className='uk-alert-close'>close</a>
                Alert successfull
              </Alert>
              <h2>
                Lightbox
              </h2>
              <Lightbox>
                <Grid>
                  <div className='uk-width-1-2'>
                    <Lightbox.Item href='http://karimov.info/uploads/portfolio/avatars/gamefanat_01.jpg' caption='Lightbox 1'>
                      <img src="http://karimov.info/uploads/portfolio/avatars/gamefanat_01.jpg.400x400_q85_crop.jpg" />
                    </Lightbox.Item>
                  </div>
                  <div className='uk-width-1-2'>
                    <Lightbox.Item href='http://karimov.info/uploads/portfolio/avatars/001.jpg' caption='Lightbox 2'>
                      <img src="http://karimov.info/uploads/portfolio/avatars/001.jpg.400x400_q85_crop.jpg" />
                    </Lightbox.Item>
                  </div>
                  {/* <div className='uk-width-1-2'>
                    <Lightbox.Item href='http://lorempixel.com/400/200/' caption='Lightbox 3'>
                      Lightbox 3
                    </Lightbox.Item>
                  </div>
                  <div className='uk-width-1-2'>
                    <Lightbox.Item href="//www.youtube.com/watch?v=YE7VzlLtp-4">
                      Video
                    </Lightbox.Item>
                  </div> */}
                </Grid>
              </Lightbox>
              <h2>
                Spinner
              </h2>
              <Spinner />
              <Icon icon="home" />
              <Icon icon="code" />
              <h2>
                Slideshow
              </h2>
              <Slideshow animation="slide" slidenav={true}>
                <ul className="uk-slideshow-items">
                  <li>
                    <Cover type="image" src="http://lorempixel.com/400/200/" />
                  </li>
                  <li>
                    <Cover type="image" src="http://lorempixel.com/400/200/" />
                  </li>
                  <li>
                    <Cover type="image" src="http://lorempixel.com/400/200/" />
                  </li>
                </ul>
              </Slideshow>
            </div>
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
