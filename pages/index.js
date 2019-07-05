import React, { Component } from 'react'

import App from '../components/App'
import Examples from '../components/Examples'

export default class Index extends Component {
  /* eslint-disable no-unused-vars */
  static async getInitialProps ({ req, query }) {
    return query
  }

  render () {
    return (
      <App {...this.props}>
        <Examples />
      </App>
    )
  }
}
