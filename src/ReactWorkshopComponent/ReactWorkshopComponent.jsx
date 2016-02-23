import React, { PropTypes, Component } from 'react';

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
      </div>
    );
  }
}

export default ReactWorkshopComponent;
