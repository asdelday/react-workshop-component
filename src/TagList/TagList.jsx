import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import uuid from 'node-uuid';
import Tag from '../Tag';
import './TagList.scss';

class TagList extends Component {
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
        <Tag className="TagList__item" key={ key } item={ item } />
      );
    });
  }

  render() {
    const { className, list } = this.props;

    return (
      <div className={ cx(className, 'TagList') }>
        { this._renderList(list) }
      </div>
    );
  }
}

export default TagList;
