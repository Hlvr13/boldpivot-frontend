import React from 'react'

import { connect } from 'react-redux'
import { HeadlinesActions } from '../../redux/reducers/headlines'

const SearchBar = ({
    getCustomHeadlines
}) => {

    const handleSearch = ev => {
        const { key, target: { value } } = ev
        const timeout = setTimeout(() => {
            if(value !== ''){
                getCustomHeadlines('title, urlToImage, description, url, publishedAt, source{ name }', `q: "${value}"`)
            }else{
                getCustomHeadlines('title, urlToImage, description, url, publishedAt, source{ name }')
            }
        }, 1000)

        if (key === 'Enter') {
            clearTimeout(timeout)
            if(value !== ''){
                getCustomHeadlines('title, urlToImage, description, url, publishedAt, source{ name }', `q: "${value}"`)
            }else{
                getCustomHeadlines('title, urlToImage, description, url, publishedAt, source{ name }')
            }        }
    }
    return (
        <div className='search-bar'>
            <input placeholder='Search news' onKeyPress={handleSearch} onChange={handleSearch} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getCustomHeadlines: (fields, args) => dispatch(HeadlinesActions.getCustomHeadlines(fields, args)),

})

export default connect(null, mapDispatchToProps)(SearchBar)

