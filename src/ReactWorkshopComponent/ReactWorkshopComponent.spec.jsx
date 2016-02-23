import React from 'react';
import { shallow } from 'enzyme';
import ReactWorkshopComponent from './ReactWorkshopComponent';

describe('<ReactWorkshopComponent />', () => {
  it('should render the title passed in', () => {
    const wrapper = shallow(<ReactWorkshopComponent title="My Title" />);
    const h1 = wrapper.find('h1');
    expect(h1).to.have.length(1);
    expect(h1.text()).contains('My Title');
  });

  it('should not render title when not passed in', () => {
    const wrapper = shallow(<ReactWorkshopComponent />);
    expect(wrapper.find('h1')).to.have.length(0);
  });
});
