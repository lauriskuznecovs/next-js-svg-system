import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import App from '../components/App'
import Examples from '../components/Examples'

export default class Index extends Component {
  /* eslint-disable no-unused-vars */
  static async getInitialProps ({ req, query }) {
    return query
  }

  // static propTypes = {
  //   langcode: PropTypes.string.isRequired,
  // }

  render () {
    // const { langcode } = this.props
    return (
      <App {...this.props}>
        <Examples />
      </App>
    )
  }
}
