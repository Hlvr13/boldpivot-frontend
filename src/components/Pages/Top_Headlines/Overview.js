import React, { useEffect, useState } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { HeadlinesActions } from '../../../redux/reducers/headlines'
import { SourcesActions } from '../../../redux/reducers/sources'

/* Components */
import { NewsCard } from '../../Common'

/* Extras */
import { TweenMax , Cubic} from 'gsap'

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
    enSources,
}) => {

    const [newsCards, setNewsCards] = useState([])

    useEffect(() => {
        //getAllHeadlines()
        getCustomHeadlines('title, urlToImage, description')
    }, []);

    useEffect(() => {
        setNewsCards([...customHeadlines.asMutable()])
    }, [customHeadlines]);
    useEffect(() => {
        console.log('Aqui',newsCards)
    }, [newsCards]);


    const verticalCarousel = () => {
        TweenMax.fromTo('#test-0', 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut ,/* onComplete: sortArray(array) */ });

        TweenMax.fromTo('#test-1', 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });

        TweenMax.to('#test-2', 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });

        TweenMax.fromTo('#test-3', 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut });
    }

    return (
        <div>
            {
                customHeadlines.map(({ title, urlToImage, description }, i) => (
                    <NewsCard id = {`test-${i}`} key={`news-card-${i}`} title={title} description={description} imgSrc={urlToImage} />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    //Headlines
    allHeadlines: state.headlines.allHeadlines,
    enHeadlines: state.headlines.enHeadlines,
    customHeadlines: state.headlines.customHeadlines,
    //Sources
    allSources: state.sources.allSources,
    enSources: state.sources.enSources,
})

const mapDispatchToProps = dispatch => ({
    //Headlines
    getAllHeadlines: () => dispatch(HeadlinesActions.getAllHeadlines()),
    getEnHeadlines: (fields) => dispatch(HeadlinesActions.getEnHeadlines(fields)),
    getCustomHeadlines: (fields, args) => dispatch(HeadlinesActions.getCustomHeadlines(fields, args)),
    //Sources
    getAllSources: () => dispatch(SourcesActions.getAllSources()),
    getEnSources: () => dispatch(SourcesActions.getEnSources()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)