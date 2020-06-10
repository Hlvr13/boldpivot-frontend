import React, { useEffect } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { HeadlinesActions } from '../../../redux/reducers/headlines'
import { SourcesActions } from '../../../redux/reducers/sources'

/* Components */
import { NewsCard } from '../../Common'

/* Extras */

const Overview = ({
  getAllHeadlines,
  allHeadlines,
  getEnHeadlines,
  enHeadlines,
  getCustomHeadlines,
  customHeadlines,

  getAllSources,
  allSources,
  getEnSources,
  enSources
}) => {
  useEffect(() => {
    // getAllHeadlines()
    getCustomHeadlines('title, urlToImage, description, url')
  }, [])

  useEffect(() => {
    console.log(customHeadlines)
  }, [customHeadlines])

  return (
    <div>
      {
        customHeadlines.map(({ title, urlToImage, description, fav }, i) => (
          <NewsCard
            key={i}
            mainKey={`news-card-${i}`}
            title={title}
            description={description}
            imgSrc={urlToImage}
            index={i}
            fav={fav}
          />
        ))
      }
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
  // Headlines
  getAllHeadlines: () => dispatch(HeadlinesActions.getAllHeadlines()),
  getEnHeadlines: (fields) => dispatch(HeadlinesActions.getEnHeadlines(fields)),
  getCustomHeadlines: (fields, args) => dispatch(HeadlinesActions.getCustomHeadlines(fields, args)),
  // Sources
  getAllSources: () => dispatch(SourcesActions.getAllSources()),
  getEnSources: () => dispatch(SourcesActions.getEnSources())
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
