import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class NavBar extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.spinner($(this.gridElement), {});
  }

  componentDidUpdate() {
    this.UIkitComponent.$emit(event = 'update');
  }

  componentWillUnmount() {
    this.UIkitComponent.$destroy();
  }

  render () {
    return (
      <span
        className={this.props.className}
        ref={(element) => {this.gridElement = element;}}
      ></span>
    );
  }
}
