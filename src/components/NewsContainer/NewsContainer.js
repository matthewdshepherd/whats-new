import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'
import './NewsContainer.scss'

const NewsContainer = ( {news} ) => {

  const newsArticles = news.map((article, i) => <NewsArticle key={`newsArticle${i}`} article={article} />)

  return (
    <div className='news-container'>
      {newsArticles}
    </div>
  )
}

export default NewsContainer;