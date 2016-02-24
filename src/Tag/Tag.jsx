import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import './Item.scss';

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
        <img src={ image } alt={ value } />
        <div className="Item__info">
          <div className="Item__value">{ value }</div>
          <div className="Item__description">{ description }</div>
        </div>
      </div>
    );
  }
}

export default Item;
