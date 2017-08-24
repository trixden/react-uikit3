import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit';

export default class Sticky extends React.Component {
  componentDidMount () {
    UIkit.sticky($(this.gridElement), {
      top: this.props.top,
      offset: this.props.offset,
      animation: this.props.animation,
      clsActive: this.props.clsActive,
      clsInactive: this.props.clsInactive,
      widthElement: this.props.widthElement,
      showOnUp: this.props.showOnUp,
      media: this.props.media,
      target: this.props.target
    });
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
