import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class Sticky extends React.Component {
  static UIkitComponent;

  componentDidMount () {
    this.UIkitComponent = UIkit.sticky($(this.gridElement), {
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

  componentDidUpdate() {
    this.UIkitComponent.$emit(event = 'update');
  }

  componentWillUnmount() {
    this.UIkitComponent.$destroy();
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
