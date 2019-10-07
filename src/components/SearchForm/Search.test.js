import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () =>{

  it('should be able to handleChange', () => {
    const wrapper = shallow(<SearchForm currentTopic={'local'} search={'dog'} />)
    const mockEvent = { 
      target: {value: 'Dalmation'}
    }
    const expected = { search: 'Dalmation'}
    
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(expected)
  })

})