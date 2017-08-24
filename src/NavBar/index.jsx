import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit';

export default class NavBar extends React.Component {
  componentDidMount () {
    UIkit.navbar($(this.gridElement), {
      align: this.props.align,
      mode: this.props.mode,
      delayShow: this.props.delayShow,
      delayHide: this.props.delayHide,
      boundary: this.props.boundary,
      boundaryAlign: this.props.boundaryAlign,
      offset: this.props.offset,
      dropbar: this.props.dropbar,
      dropbarMode: this.props.dropbarMode,
      duration: this.props.duration
    });
  }

  render () {
    return (
      <nav
        className={this.props.className}
        ref={(element) => {this.gridElement = element;}}
      >
        {this.props.children}
      </nav>
    );
  }
}
