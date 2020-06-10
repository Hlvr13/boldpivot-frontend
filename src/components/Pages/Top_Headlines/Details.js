import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Details = ({
  match: { params: { id: newsId } },
  customHeadlines
}) => {
  const [news, setNews] = useState({
    title: '',
    description: ''
  })

  useEffect(() => {
    if (customHeadlines.length > 0) {
      setNews(customHeadlines[newsId])
    }
  }, [])

  return (
    <div>
      <h1>Details</h1>
      <h2>{news.title}</h2>
      <h4>{news.description}</h4>
    </div>
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
