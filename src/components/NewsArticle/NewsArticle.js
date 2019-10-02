import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = ({article}) => {
  return (
    <article className='newsArticle' id={article.id}>
      <div className='imageDiv'>
        <img className='img' src={article.img} alt={article.headline} />
      </div>
      <div className='newsArticleContents'>
        <h2 className='articleTitle' >{article.headline}</h2>
        <p className='articleDescription' >{article.description}</p>
        <a className='articleLink' href={article.url}>Full Story > </a>
      </div>
    </article>
  )
}
export default NewsArticle;