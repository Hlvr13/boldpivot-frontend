import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Pages //
import HeadlineOverview from '../Pages/Top_Headlines/Overview'
import HeadlineDetails from '../Pages/Top_Headlines/Details'
import NotFound from '../Pages/NotFound'

const Routes = () => {
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

export default Routes
