import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

export default class Icon extends React.Component {
  static UIkitComponent;

  constructor(props) {
    super(props);
    UIkit.use(Icons);
  }

  componentDidMount() {
    this.UIkitComponent = UIkit.icon($(this.gridElement), {
      icon: this.props.icon,
      ratio: this.props.ratio
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
      <span
        className={this.props.className}
        ref={(element) => {this.gridElement = element;}}
      ></span>
    );
  }
}
