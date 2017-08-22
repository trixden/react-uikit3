# Available components

- [Grid](#grid)
- [Sticky](#sticky)

## Grid
[Official guide](https://getuikit.com/docs/grid)

~~~javascript
import {Grid} from 'react-uikit3';

React.render((
  <Grid>
    <div className={'uk-width-1-2'}>
      Left column
    </div>
    <div className={'uk-width-1-2'}>
      Right column
    </div>
  </Grid>
), element)
~~~

Attribute |  Type  | Required?
----------|--------|---------
className | string | false

## Sticky
[Official guide](https://getuikit.com/docs/sticky)

~~~javascript
import {Sticky} from 'react-uikit3';

React.render((
  <Sticky>
    <h1>
      I am a sticky
    </h1>
  </Sticky>
), element)
~~~

Attribute           |  Type            | Required?
--------------------|------------------|---------
className           | string           | false
top                 | number, selector | false
animation           | string, false    | false
clsActive           | string           | false
clsInactive         | string           | false
widthElement        | selector         | false
showOnUp            | boolean          | false
media               | number           | false
target              | boolean          | false
