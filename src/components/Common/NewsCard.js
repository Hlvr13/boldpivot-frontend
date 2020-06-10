import React from 'react'

const NewsCard = ({
    key,
    imgSrc = '',
    title = 'No Tititle Available',
    description = 'No Description.',
    ...rest
}) => {

    return (
        <div className = 'news-card' key={key} {...rest}>
            <img className = 'news-card-img' src={imgSrc} alt='top headline visual' />
            <div className = 'news-card-content'>
                <h4 className = 'news-card-content-title'>{title}</h4>
                <p className = 'news-card-content-description'>{description}</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default NewsCard