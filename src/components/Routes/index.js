import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Pages //
import HeadlineOverview from '../Pages/Top_Headlines/Overview'
import NotFound from '../Pages/NotFound'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HeadlineOverview} />


                <Route exact path = '/not-found' component={NotFound}/>
                <Redirect to = '/not-found'/>
            </Switch>
        </Router>
    )
}

export default Routes