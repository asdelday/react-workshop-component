import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import uuid from 'node-uuid';
import Item from '../Item';

class ItemList extends Component {
  static propTypes = {
    list: PropTypes.array,
    className: PropTypes.string,
  };

  static defaultProps = {
    list: [],
  };

  _renderList(list = []) {
    return list.map(item => {
      const key = `item-${uuid.v4()}`;

      return (
        <Item className="ItemList__item" key={ key } item={ item } />
      );
    });
  }

  render() {
    const { className, list } = this.props;

    return (
      <div className={ cx(className, 'ItemList') }>
        { this._renderList(list) }
      </div>
    );
  }
}

export default ItemList;
