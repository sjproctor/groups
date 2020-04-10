import React, { Component } from 'react'

class CohortShow extends Component{
  constructor(){
    super()
    this.state = {
      cohort: null
    }
  }

  // using an additonal fetch to avoid a huge payload in App.js
  componentDidMount(){
    const { id } = this.props.match.params
    return fetch(`/cohorts/${id}`,
      { method: "GET" }
    ).then((response) => {
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((payload)=> {
      console.log(payload)
      this.setState({ cohort: payload })
    })
  }

  render(){
    return(
      <React.Fragment>
        { this.state.cohort &&
          <div>
            <h3>{ this.state.cohort.name }</h3>
            <ul>
            { this.state.cohort.students.map((student, index) => {
              return(
                <li key={ index }>{ student.name }</li>
              )
            })}
            </ul>
          </div>
        }
        <button>Create Groups</button>
      </React.Fragment>
    )
  }
}
export default CohortShow
