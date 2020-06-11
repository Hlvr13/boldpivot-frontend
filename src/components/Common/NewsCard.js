import React from 'react'
import { NavLink } from 'react-router-dom'

import Rating from './Rating'
import { FiCalendar } from 'react-icons/fi'
import { HeadlinesActions } from '../../redux/reducers/headlines'
import { connect } from 'react-redux'

const NewsCard = ({
  customHeadlines,
  i,
  mainKey,
  imgSrc = '',
  title = 'No Title Available',
  publishedAt,
  setToFavorite,
  fav,
  review,
  ...rest
}) => {
  return (
    <div className='news-card' key={mainKey} {...rest}>
      <img className='news-card-img' src={imgSrc} alt='top headline visual' />
      <div className='news-card-content'>
        <NavLink to={`/news-details/${i}`} className='news-card-content-title' data-test={`url-${i}`}>{title}</NavLink>
        <p className='news-card-content-date'><FiCalendar /> {publishedAt}</p>
      </div>
      <div className='news-card-interactions'>
        <Rating defaulRate={review} i={i} dataTest={`rating-${i}`} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  // Headlines
  setToFavorite: (index, id) => dispatch(HeadlinesActions.setToFavorite(index, id))

})

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard)
