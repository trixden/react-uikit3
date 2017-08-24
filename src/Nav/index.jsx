import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit';

export default class Nav extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.nav($(this.targetElement), {
      targets: this.props.targets,
      toggle: this.props.toggle,
      content: this.props.content,
      collapsible: this.props.collapsible,
      multiple: this.props.multiple,
      transition: this.props.transition,
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
      <ul
        className={this.props.className}
        ref={(element) => {this.targetElement = element;}}
      >
        {this.props.children}
      </ul>
    );
  }
}
