import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import './Tag.scss';

class Tag extends Component {
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
    const { value, image } = item;

    return (
      <div className={ cx(className, 'Tag') }>
        <img src={ image } alt={ value } />
        <div className="Tag__info">
          <div className="Tag__value">{ value }</div>
        </div>
      </div>
    );
  }
}

export default Tag;
