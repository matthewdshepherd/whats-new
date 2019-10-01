import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'
import './NewsContainer.css'

const NewsContainer = ( {news} ) => {
  const newArticles = news.map((article, i) => <NewsArticle key={`newsArticle${i}`} article={article} />)

  return (
    <div className='news-container'>
      {newArticles}
    </div>
  )
}

export default NewsContainer;