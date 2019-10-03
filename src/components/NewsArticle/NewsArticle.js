import React from 'react';
import './NewsArticle.scss';


// NOTE for integration : 
// I've deleted some className to DOM element
// to favorize CSS cascade stylesheet

// ! NOTE :
// I've englobe the card with a link to have full clickable card

const NewsArticle = ({article}) => {
  return (
    <article className='card-news' id={article.id}>
      <a href={article.url}>      
        <div className='card-news__img'>
          <img src={article.img} alt={article.headline} />
        </div>

        <div className='card-news__content'>
          <h2>{article.headline}</h2>
          <p>{article.description}</p>
        </div>
        
        <span className="card-news__button">Read the news <i class="icon icon--arrow-right"></i></span>
      </a>
    </article>
  )
}
export default NewsArticle;