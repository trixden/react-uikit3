import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class Alert extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.alert($(this.gridElement), {
      animation: this.props.animation,
      duration: this.props.duration,
      selClose: this.props.selClose
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
