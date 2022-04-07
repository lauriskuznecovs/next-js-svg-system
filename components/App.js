import PropTypes from 'prop-types'
import Layout from './Layout'
import Main from './General/Main'

/**
 * App component.
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const App = ({ children }) => (
  <Layout>
    <Main>{children}</Main>
  </Layout>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App
