import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit';

export default class Grid extends React.Component {
  componentDidMount () {
    UIkit.grid($(this.gridElement), {});
  }

  render () {
    return (
      <div
        className={this.props.className}
        ref={(element) => {this.gridElement = element;}}
      >
        {this.props.children}
      </div>
    );
  }
}
