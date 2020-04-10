import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CohortIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Cohorts</h3>
        { this.props.cohorts.map((cohort, index) => {
            return(
              <ul key={ index }>
                <li>
                  <Link to={`/cohorts/${cohort.id}`}>{ cohort.name } {cohort.year}</Link>
                </li>
              </ul>
            )
          })
        }
      </React.Fragment>
    )
  }
}
export default CohortIndex
