import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <img src={loading} alt="loading..." />
      </div>
    )
  }
}

export default Spinner
