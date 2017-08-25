import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit';

export default class Accordion extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.accordion($(this.gridElement), {
      targets: this.props.targets,
      active: this.props.active,
      collapsible: this.props.collapsible,
      multiple: this.props.multiple,
      animation: this.props.animation,
      transition: this.props.transition,
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
      <ul
        className={this.props.className}
        ref={(element) => {this.gridElement = element;}}
      >
        {this.props.children}
      </ul>
    );
  }
}
