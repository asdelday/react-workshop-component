import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    item: {},
  };

  render() {
    const { className, item } = this.props;
    if (!item) { return null;}
    const { value, description, image } = item;

    return (
      <div className={ cx(className, 'Item') }>
        <div className="Item__value">{ value }</div>
        <div className="Item__description">{ description }</div>
        <div className="Item__image">{ image }</div>
      </div>
    );
  }
}

export default Item;
