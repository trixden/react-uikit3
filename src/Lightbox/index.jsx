import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class Lightbox extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.lightbox($(this.gridElement), {
			animation: this.props.animation,
			toggle: this.props.toggle
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
        ref={(element) => {this.gridElement = element;}}
        className={this.props.className}
      >
				{this.props.children}
			</div>
		);
  }
}

exports.Item = class LightboxItem extends React.Component {
  componentDidMount() {
    $(this.targetElement).attr('caption', this.props.caption);
  }

  componentDidUpdate() {
    $(this.targetElement).attr('caption', this.props.caption);
  }

  render() {
    return (
      <a
        ref={(element) => {this.targetElement = element;}}
        href={this.props.href}
        className={this.props.className}
      >
        {this.props.children}
      </a>
    );
  }
};
