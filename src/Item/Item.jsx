import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import './Item.scss';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
    onItemClick: PropTypes.func,
  };

  static defaultProps = {
    item: {},
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { item, onItemClick } = this.props;

    if (typeof onItemClick === 'function') {
      onItemClick(item);
    }
  }

  render() {
    const { className, item } = this.props;
    if (!item) { return null;}
    const { value, description, image } = item;

    return (
      <div className={ cx(className, 'Item') } onClick={ this.handleClick }>
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
