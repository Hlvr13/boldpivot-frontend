import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { DetailCard } from '../../Common'

const Details = ({
  match: { params: { id: newsId } },
  customHeadlines
}) => {
  const [news, setNews] = useState({
    title: 'No title available',
    description: 'No Description Available',
    source: { name: '' }
  })

  useEffect(() => {
    if (customHeadlines.length > 0) {
      setNews(customHeadlines[newsId])
    }
  }, [customHeadlines])

  return (
    <section id='details-section'>
      <div className='row'>
        <div className='col xs-12'>
          <DetailCard
            key={newsId}
            mainKey={`news-card-${newsId}`}
            i={newsId}
            title={news.title}
            publishedAt={news.publishedAt}
            description={news.description}
            source={news.source.name}
            sourceLink={news.url}
            imgSrc={news.urlToImage}
            review = {news.review}
          />
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  // Headlines
  allHeadlines: state.headlines.allHeadlines,
  enHeadlines: state.headlines.enHeadlines,
  customHeadlines: state.headlines.customHeadlines,
  // Sources
  allSources: state.sources.allSources,
  enSources: state.sources.enSources
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details))
