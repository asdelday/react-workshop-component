import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import ItemList from '../ItemList';
import TagList from '../TagList';
import './SearchComponent.scss';

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
    this.state = { searchValue: '', tagList: [] };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleSearchInputChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleItemClick(item) {
    const { tagList } = this.state;
    this.setState({ tagList: [...tagList, item] });
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
    const { searchValue, tagList } = this.state;
    const { className, placeholder } = this.props;
    const filteredItemList = this.filterItemList();

    return (
      <div className={ cx(className, 'SearchComponent') }>
        <TagList className="SearchComponent__tagList" list={ tagList } />
        <input className="SearchComponent__input"
               type="text"
               value={ searchValue}
               placeholder={ placeholder }
               onChange={ this.handleSearchInputChange }
        />
        <ItemList className="SearchComponent__itemList"
                  list={ filteredItemList }
                  onItemClick={ this.handleItemClick }
        />
      </div>
    );
  }
}

export default SearchComponent;
