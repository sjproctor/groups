import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import CohortIndex from './pages/CohortIndex'
import CohortShow from './pages/CohortShow'

class App extends Component {
  constructor(){
    super()
    this.state = {
      cohorts: []
    }
    // calls the fetch method
    this.getCohorts()
  }

  // gets the cohorts from the database and set the payload to state
  getCohorts = () => {
    return fetch('/cohorts',
      { method: "GET" }
    ).then((response) => {
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((payload)=> {
      this.setState({ cohorts: payload })
    })
  }

  render(){
    // destructuring content from props for devise
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route
              exact path="/cohorts/:id"
              render={ (props) =>
                <CohortShow {...props} cohorts={ this.state.cohorts } />
              }
            />
            <Route
              exact path="/"
              render={ (props) =>
                <CohortIndex cohorts={ this.state.cohorts } />
              }
            />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
