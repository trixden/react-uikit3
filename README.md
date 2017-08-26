# Available components

- [Accordion](#accordion)
- [Grid](#grid)
- [Sticky](#sticky)
- [Nav](#nav)
- [NavBar](#navbar)

## Accordion
[Official guide](https://getuikit.com/docs/accordion)

~~~js
import {Accordion} from 'react-uikit3';

React.render((
  <Accordion>
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
), element);
~~~

Attribute     |  Type   | Required?
--------------|---------|---------
`className`   | string  | false
`targets`     | string  | false
`active`      | number  | false
`collapsible` | boolean | false
`multiple`    | boolean | false
`animation`   | boolean | false
`transition`  | string  | false
`duration`    | number  | false

## Alert
[Official guide](https://getuikit.com/docs/alert)

~~~js
import {Alert} from 'react-uikit3';

React.render((
  <Alert className='uk-alert-success'>
    Alert successfull!
    <a className='uk-alert-close'>Close</a>
  </Alert>
), element);
~~~

Attribute             |  Type            | Required?
----------------------|------------------|---------
`className`           | string           | false
`animation`           | boolean, string  | false
`duration`            | number           | false
`selClose`            | selector         | false

## Grid
[Official guide](https://getuikit.com/docs/grid)

~~~js
import {Grid} from 'react-uikit3';

React.render((
  <Grid>
    <div className='uk-width-1-2'>
      Left column
    </div>
    <div className='uk-width-1-2'>
      Right column
    </div>
  </Grid>
), element);
~~~

Attribute     |  Type  | Required?
--------------|--------|---------
`className`   | string | false
`firstColumn` | string | false
`margin`      | string | false

## Sticky
[Official guide](https://getuikit.com/docs/sticky)

~~~js
import {Sticky} from 'react-uikit3';

React.render((
  <Sticky>
    <h1>
      I am a sticky
    </h1>
  </Sticky>
), element);
~~~

Attribute             |  Type            | Required?
----------------------|------------------|---------
`className`           | string           | false
`top`                 | number, selector | false
`animation`           | string, false    | false
`clsActive`           | string           | false
`clsInactive`         | string           | false
`widthElement`        | selector         | false
`showOnUp`            | boolean          | false
`media`               | number           | false
`target`              | boolean          | false

## Nav
[Official guide](https://getuikit.com/docs/nav)

~~~js
import {Nav} from 'react-uikit3';
import {Link} from 'react-router';

React.render((
  <Nav className='uk-nav-default uk-nav-parent-icon'>
    <li>
      <Link to='/'>One</Link>
    </li>
    <li>
      <Link to='/two'>Two</Link>
    </li>
    <li className='uk-parent'>
      <a>Three</a>
      <ul className='uk-nav-sub'>
        <li>
          <Link to='/sub-one'>Sub One</Link>
        </li>
        <li>
          <Link to='/sub-two'>Sub Two</Link>
        </li>
        <li>
          <Link to='/sub-three'>Sub Three</Link>
        </li>
      </ul>
    </li>
  </Nav>
), element);
~~~

## NavBar
[Official guide](https://getuikit.com/docs/navbar)

~~~js
import {NavBar} from 'react-uikit3';
import {Link} from 'react-router';

React.render((
  <NavBar>
    <div className='uk-navbar-left'>
      <ul className='uk-navbar-nav'>
        <li>
          <Link to='/'>One</Link>
        </li>
        <li>
          <Link to='/two'>Two</Link>
        </li>
        <li>
          <Link to='/three'>Three</Link>
          <div className='uk-navbar-dropdown'>
            <ul className='uk-nav uk-navbar-dropdown-nav'>
              <li>
                <Link to='/sub-one'>Sub One</Link>
              </li>
              <li>
                <Link to='/sub-two'>Sub Two</Link>
              </li>
              <li>
                <Link to='/sub-three'>Sub Three</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </NavBar>
), element);
~~~

Attribute       |  Type    | Required?
----------------|----------|---------
`align`         | string   | false
`mode`          | string   | false
`delayShow`     | number   | false
`delayHide`     | number   | false
`boundary`      | selector | false
`boundaryAlign` | boolean  | false
`offset`        | number   | false
`dropbar`       | boolean  | false
`dropbarMode`   | string   | false
`duration`      | number   | false
