import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';

export default class Cover extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    this.UIkitComponent = UIkit.cover($(this.gridElement), {
      automute: this.props.automute,
      width: this.props.width,
      height: this.props.height
    });
  }

  componentDidUpdate() {
    this.UIkitComponent.$emit(event = 'update');
  }

  componentWillUnmount() {
    this.UIkitComponent.$destroy();
  }

  render () {
    return this.props.type === 'image' ? (
        <img
          ref={(element) => {this.gridElement = element;}}
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          className={this.props.className}
        />
      ) : this.props.type === 'iframe' ? (
        <iframe
          ref={(element) => {this.gridElement = element;}}
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          className={this.props.className}
        >
        </iframe>
      ) : this.props.type === 'video' ? (
        <video
          ref={(element) => {this.gridElement = element;}}
          className={this.props.className}
        >
          {this.props.children}
        </video>
      ) : (
        <div
          className={this.props.className}
          ref={(element) => {this.gridElement = element;}}
        >
          {this.props.children}
        </div>
      );
  }
}
