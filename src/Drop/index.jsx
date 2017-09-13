import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class Drop extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.drop($(this.dropElement), {
      toggle: this.props.toggle,
      pos: this.props.pos,
      mode: this.props.mode,
      delayShow: this.props.delayShow,
      delayHide: this.props.delayHide,
      boundary: this.props.boundary,
      boundaryAlign: this.props.boundaryAlign,
      flip: this.props.flip,
      offset: this.props.offset,
      animation: this.props.animation,
      duration: this.props.duration
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
        ref={(element) => {this.dropElement = element;}}
      >
        {this.props.children}
      </div>
    );
  }
}