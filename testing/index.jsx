import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Sticky} from '../src';

class Html extends React.Component {
  render () {
    return (
      <div style={{minHeight: '300vh'}}>
        <h1>
          BEGIN
        </h1>
        <Sticky
          animation={'uk-animation-slide-top'}
          target={true}
        >
          <h1>
            I'm a sticky element
          </h1>
        </Sticky>
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
  <Html />,
  document.getElementById('component')
);
