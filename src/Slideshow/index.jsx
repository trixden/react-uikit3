import React from 'react';
import $ from 'jquery';
import UIkit from 'uikit';
import ReactDOM from 'react-dom';

export default class NavBar extends React.Component {
  static UIkitComponent;

  componentDidMount() {
    if (this.props.slidenav) {
      const slidenavLeft = ReactDOM.findDOMNode(this.slidenavLeft);
      slidenavLeft.setAttribute('uk-slidenav-previous', '');
      slidenavLeft.setAttribute('uk-slideshow-item', 'previous');
      const slidenavRight = ReactDOM.findDOMNode(this.slidenavRight);
      slidenavRight.setAttribute('uk-slidenav-next', '');
      slidenavRight.setAttribute('uk-slideshow-item', 'next');
    }

    this.UIkitComponent = UIkit.slideshow($(this.gridElement), {
      animation: this.props.animation,
      autoplay: this.props.autoplay,
      autoplayInterval: this.props.autoplayInterval,
      finite: this.props.finite,
      pauseOnHover: this.props.pauseOnHover,
      index: this.props.index,
      velocity: this.props.velocity,
      ratio: this.props.ratio,
      minHeight: this.props.minHeight,
      maxHeight: this.props.maxHeight
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
        {this.props.slidenav ? (
          <div className="uk-position-relative uk-visible-toggle uk-light">
            {this.props.children}

            <a ref={element => {this.slidenavLeft = element}} className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"></a>
            <a ref={element => {this.slidenavRight = element}} className="uk-position-center-right uk-position-small uk-hidden-hover" href="#"></a>
          </div>
        ) : (
          <div>{this.props.children}</div>
        )}
      </div>
    );
  }
}
