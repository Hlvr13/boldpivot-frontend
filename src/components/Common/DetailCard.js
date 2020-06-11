import React from 'react'
import { NavLink } from 'react-router-dom'

import Rating from './Rating'
import { FiCalendar, FiArrowLeft } from 'react-icons/fi'
import { HeadlinesActions } from '../../redux/reducers/headlines'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const NewsCard = ({
  customHeadlines,
  i,
  mainKey,
  imgSrc = '',
  title = 'No Title Available',
  description = 'No Description',
  publishedAt,
  fav,
  review,
  source,
  sourceLink,
  history,
  ...rest
}) => {
  
  const goBack = ev =>{
    history.goBack()
  }

  return (
    <div className='detail-card' key={mainKey} {...rest}>
      <FiArrowLeft className='go-back' onClick = {goBack}/>
      <img className='detail-card-img' src={imgSrc} alt='top headline visual' />
      <div className='detail-card-content'>
        <h1 className='detail-card-content-title' data-test={`title-${i}`}>
          {title}
          <a
            href={sourceLink}
            target='_blank'
            rel='noopener noreferrer'
            className='detail-card-content-more'
          >
            Read More
        </a>
        </h1>
        <p className='detail-card-content-description'> {description}</p>
        <p className='detail-card-content-source'><strong>{source}</strong></p>
        <p className='detail-card-content-date'><FiCalendar /> {publishedAt}</p>
      </div>
      <div className='detail-card-interactions'>
        <Rating defaulRate={review} i={i} dataTest={`rating-${i}`} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewsCard))
