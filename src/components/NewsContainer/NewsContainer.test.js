import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer'

describe('NewsContainer', () => {
  it('should match the snapshot with all the data passed in corretly with a zero or even index', () => {
    // setup
    const news = [
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

    // execution
    const wrapper = shallow(
      <NewsContainer news={news} />
    )

    // expectation
    expect(wrapper).toMatchSnapshot();

  })
})