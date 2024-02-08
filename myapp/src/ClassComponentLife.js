import React, { Component } from 'react'

export default class ClassComponentLife extends Component {
   
  render() {
    return (
      <div>
        <h1> Class Component </h1>
      </div>
    )
  }
  componentDidMount(){
    console.log("Component Did Mount")
  }
  componentDidUpdate(){
    console.log("Component Did Update")
  }
  componentWillUnmount(){
    console.log("Component Un Mount")
  }
}
