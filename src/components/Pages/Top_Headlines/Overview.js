import React from 'react'
/* Redux */
import { connect } from 'react-redux'
import { HeadlinesActions } from '../../../redux/reducers/headlines'
import { SourcesActions } from '../../../redux/reducers/sources'

/* Components */
import { NewsCard, SearchBar } from '../../Common'

/* Extras */

const Overview = ({
  customHeadlines,
}) => {

  return (
    <section id='overview-section'>
      <SearchBar/>
      <div className='row'>
        <div className='col xs-12 md-10-offset-2 lg-6-offset-4'>
          {
            customHeadlines.map(({ title, urlToImage, review, publishedAt }, i) => (
              <NewsCard
                key={i}
                mainKey={`news-card-${i}`}
                title={title}
                imgSrc={urlToImage}
                publishedAt={publishedAt}
                i={i}
                review={review}
              />
            ))
          }
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
  // Headlines
  getAllHeadlines: () => dispatch(HeadlinesActions.getAllHeadlines()),
  getEnHeadlines: (fields) => dispatch(HeadlinesActions.getEnHeadlines(fields)),
  getCustomHeadlines: (fields, args) => dispatch(HeadlinesActions.getCustomHeadlines(fields, args)),
  // Sources
  getAllSources: () => dispatch(SourcesActions.getAllSources()),
  getEnSources: () => dispatch(SourcesActions.getEnSources())
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
