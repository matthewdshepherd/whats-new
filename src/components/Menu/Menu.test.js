import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu'

describe('Menu', () => {
  it('should match the snapshot with all topics displayed', () =>{
    // setup
    const mockSelectTopic = jest.fn();

    // execution
    const wrapper = shallow(<Menu selectTopic={mockSelectTopic} />)

    // expectation
    expect(wrapper).toMatchSnapshot();
  })

  it('should be able to click a topic and have a function run', () => {
    // setup
    const mockSelectTopic = jest.fn();

    // execution
    const wrapper = shallow(<Menu selectTopic={mockSelectTopic} />)
    wrapper.find('li').at(0).simulate('click')
    
    // expectation 
    expect(mockSelectTopic).toHaveBeenCalled();

  })
})