import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class Countdown extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.countdown($(this.Element), {
      date: this.props.date
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
        ref={(element) => {this.Element = element;}}
      >
        {this.props.children}
      </div>
    );
  }
}