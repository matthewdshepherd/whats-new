import React from 'react';
import { shallow } from 'enzyme';
import NewsArticleImgLeft from './NewsArticleImgLeft';
import { exportAllDeclaration } from '@babel/types';

describe('NewsArticleImgLeft', () => {
  it('should match the snapshot with all data passed in correctly', () => {

    const article = {
      id: 5,
      img: 'www.101.com',
      headline: 'Hundred and One Dalmatians',
      description: 'Cruella visits their home and expresses contempt upon meeting Roger. Her initial disgust at them having a baby turns to excitement when she finds out Perdy is expecting too.',
      url: 'www.101.com'
    }

    const wrapper = shallow(
      <NewsArticleImgLeft article={article}
      />
    )

    expect(wrapper).toMatchSnapshot();

  })
})