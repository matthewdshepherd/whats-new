import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = ({article}) => {
  console.log(article)
  return (
    <article className='newsArticle' id={article.id}>
      <h2>{article.headline}</h2>
      <img src={article.img} alt={article.headline} />
      <p>{article.description}</p>
      <a href={article.url}>Full Story</a>
    </article>
  )
}
export default NewsArticle;