import React from 'react';
import NewsArticleImgLeft from '../NewsArticle/NewsArticleImgLeft'
import NewsArticleImgRight from '../NewsArticle/NewsArticleImgRight'
import './NewsContainer.css'

const NewsContainer = ( {news} ) => {

  const newsArticles = news.map((article, i) => {
    if (i === 0 || i % 2 === 0) {
      return <NewsArticleImgLeft key={`newsArticle${i}`} article={article} />
    } else {
      return <NewsArticleImgRight key={`newsArticle${i}`} article={article} />
    }
  })

  return (
    <div className='news-container'>
      {newsArticles}
    </div>
  )
}

export default NewsContainer;