import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
var mockData, mockFetchData;

beforeEach(() => {
  
  mockData = [
    {
      id: 5,
      img: 'www.101.com',
      headline: 'Hundred and One Dalmatians',
      description: 'Cruella visits their home and expresses contempt upon meeting Roger. Her initial disgust at them having a baby turns to excitement when she finds out Perdy is expecting too.',
      url: 'www.101.com'
    },
    {
      id: 4,
      img: 'www.blackbeautymovie.com',
      headline: 'Black Beauty',
      description: 'This heartwarming adaptation of the novel tells the story of the courageous stallion Black Beauty, a well-bred horse in 19th century England.',
      url: 'www.blackbeautymovie.com'
    }
  ];

  mockFetchData = {
    local: [
      {
        id: 5,
        img: 'www.101.com',
        headline: 'Hundred and One Dalmatians',
        description: 'Cruella visits their home and expresses contempt upon meeting Roger. Her initial disgust at them having a baby turns to excitement when she finds out Perdy is expecting too.',
        url: 'www.101.com'
      },
      {
        id: 4,
        img: 'www.blackbeautymovie.com',
        headline: 'Black Beauty',
        description: 'This heartwarming adaptation of the novel tells the story of the courageous stallion Black Beauty, a well-bred horse in 19th century England.',
        url: 'www.blackbeautymovie.com'
      }
    ],
    entertainment: [
      {
        id: 5,
        img: 'www.101.com',
        headline: 'Hundred and One Dalmatians',
        description: 'Cruella visits their home and expresses contempt upon meeting Roger. Her initial disgust at them having a baby turns to excitement when she finds out Perdy is expecting too.',
        url: 'www.101.com'
      },
      {
        id: 4,
        img: 'www.blackbeautymovie.com',
        headline: 'Black Beauty',
        description: 'This heartwarming adaptation of the novel tells the story of the courageous stallion Black Beauty, a well-bred horse in 19th century England.',
        url: 'www.blackbeautymovie.com'
      }
    ],
    health: [
      {
        id: 5,
        img: 'www.101.com',
        headline: 'Hundred and One Dalmatians',
        description: 'Cruella visits their home and expresses contempt upon meeting Roger. Her initial disgust at them having a baby turns to excitement when she finds out Perdy is expecting too.',
        url: 'www.101.com'
      },
      {
        id: 4,
        img: 'www.blackbeautymovie.com',
        headline: 'Black Beauty',
        description: 'This heartwarming adaptation of the novel tells the story of the courageous stallion Black Beauty, a well-bred horse in 19th century England.',
        url: 'www.blackbeautymovie.com'
      }
    ],
    science: [
      {
        id: 5,
        img: 'www.101.com',
        headline: 'Hundred and One Dalmatians',
        description: 'Cruella visits their home and expresses contempt upon meeting Roger. Her initial disgust at them having a baby turns to excitement when she finds out Perdy is expecting too.',
        url: 'www.101.com'
      },
      {
        id: 4,
        img: 'www.blackbeautymovie.com',
        headline: 'Black Beauty',
        description: 'This heartwarming adaptation of the novel tells the story of the courageous stallion Black Beauty, a well-bred horse in 19th century England.',
        url: 'www.blackbeautymovie.com'
      }
    ],
    technology: [
      {
        id: 5,
        img: 'www.101.com',
        headline: 'Hundred and One Dalmatians',
        description: 'Cruella visits their home and expresses contempt upon meeting Roger. Her initial disgust at them having a baby turns to excitement when she finds out Perdy is expecting too.',
        url: 'www.101.com'
      },
      {
        id: 4,
        img: 'www.blackbeautymovie.com',
        headline: 'Black Beauty',
        description: 'This heartwarming adaptation of the novel tells the story of the courageous stallion Black Beauty, a well-bred horse in 19th century England.',
        url: 'www.blackbeautymovie.com'
      }
    ]
  };
})

describe('App', () => {
  

  it('should update state  when updateState is run', () => {
    // setup
    const wrapper = shallow(<App />)
    const expected = mockData;

    // execution
    wrapper.instance().updateState(mockData)

    // expectation
    expect(wrapper.state('currentTopic')).toEqual(expected)
  })

  it('should be able to setTopicData when promised is returned', ()=> {
    // setup 
    const wrapper = shallow(<App />);
    
    //  execution
    wrapper.instance().setTopicData(mockFetchData);

    // expectation
    expect(wrapper.state()).toEqual({ "currentTopic": mockFetchData.local})
  })

  it('should be able to update state with selectTopic method', () => {
    //  setup
    const wrapper = shallow(<App />);

    // execution
    wrapper.instance().setTopicData(mockFetchData);
    wrapper.instance().selectTopic('entertainment')

    // expectation
    expect(wrapper.state()).toEqual({"currentTopic": mockFetchData.entertainment})
  })
})
