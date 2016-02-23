import React, { PropTypes, Component } from 'react';
import SearchComponent from '../SearchComponent';
import items from '../items';

class ReactWorkshopComponent extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  };

  render() {
    const { title } = this.props;

    return (
      <div className="ReactWorkshopComponent">
        { title && <h1 className="ReactWorkshopComponent__title">{ title }</h1> }
        <SearchComponent className="ReactWorkshopComponent__searchComponent"
                         placeholder="Type here..."
                         filterableItems={ items }
        />
      </div>
    );
  }
}

export default ReactWorkshopComponent;
