import React from 'react';
import './NewsArticle.scss';

const NewsArticleImgRight = ({ article }) => {
  return (
    <article className='newsArticle' id={article.id}>
      <div className='newsArticleContents'>
        <h2 className='articleTitle' >{article.headline}</h2>
        <p className='articleDescription' >{article.description}</p>
        <a className='articleLink' href={article.url}>Full Story ▶︎ </a>
      </div>
      <div className='imageDiv'>
        <img className='img' src={article.img} alt={article.headline} />
      </div>
    </article>
  )
}
export default NewsArticleImgRight;