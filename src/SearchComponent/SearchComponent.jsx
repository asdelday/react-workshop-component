import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import ItemList from '../ItemList';

class SearchComponent extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    filterableItems: PropTypes.array,
    className: PropTypes.string,
  };

  static defaultProps = {
    placeholder: 'Type for search',
    filterableItems: [],
  };

  constructor(props) {
    super(props);
    this.state = { searchValue: '' };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  filterItemList() {
    const { searchValue } = this.state;
    const { filterableItems } = this.props;

    return filterableItems.filter(item => {
      const { value, description } = item;
      const valueStr = value && value.trim().toLowerCase();
      const searchValueStr = searchValue && searchValue.trim().toLowerCase();

      if (!searchValueStr) { return true; }
      return valueStr.includes(searchValueStr) || description.includes(searchValueStr);
    });
  }

  render() {
    const { searchValue } = this.state;
    const { className, placeholder } = this.props;
    const filteredItemList = this.filterItemList();

    return (
      <div className={ cx(className, 'SearchComponent') }>
        <input type="text" value={ searchValue} placeholder={ placeholder }
               onChange={ this.handleSearchInputChange }
        />
        <ItemList className="SearchComponent__itemList" list={ filteredItemList } />
      </div>
    );
  }
}

export default SearchComponent;
