import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { HeadlinesActions } from '../../redux/reducers/headlines'
import { connect } from 'react-redux'

// Pages //
import HeadlineOverview from '../Pages/Top_Headlines/Overview'
import HeadlineDetails from '../Pages/Top_Headlines/Details'
import NotFound from '../Pages/NotFound'

const Routes = ({ getCustomHeadlines }) => {

  useEffect(()=>{
    getCustomHeadlines('title, urlToImage, description, url, publishedAt, source{ name }')
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HeadlineOverview} />
        <Route exact path='/news-details/:id' component={HeadlineDetails} />

        <Route exact path='/not-found' component={NotFound} />
        <Redirect to='/not-found' />
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = dispatch => ({
  // Headlines
  getCustomHeadlines: (fields, args) => dispatch(HeadlinesActions.getCustomHeadlines(fields, args)),
})

export default connect(null, mapDispatchToProps)(Routes)
