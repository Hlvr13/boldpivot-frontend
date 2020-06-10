import React from 'react'
import { NavLink } from 'react-router-dom'

import { FiArrowDown, FiStar } from 'react-icons/fi'
import { HeadlinesActions } from '../../redux/reducers/headlines'
import { connect } from 'react-redux'

const NewsCard = ({
  customHeadlines,
  index,
  mainKey,
  imgSrc = '',
  title = 'No Tititle Available',
  description = 'No Description.',
  setToFavorite,
  fav,
  ...rest
}) => {
  console.log('fav', fav)

  const setToFav = () => {
    setToFavorite(index)
  }

  return (
    <div className='news-card' key={mainKey} {...rest}>
      <img className='news-card-img' src={imgSrc} alt='top headline visual' />
      <div className='news-card-content'>
        <NavLink to={`/news-details/${index}`} className='news-card-content-title'>{title}</NavLink>
        <p className='news-card-content-description'>{description}</p>
      </div>
      <div className='news-card-interactions'>
        <FiArrowDown className='interaction-icon' />
        <FiStar className={`interaction-icon ${fav ? 'fav' : ''}`} onClick={setToFav} />
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
