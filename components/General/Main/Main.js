/**
 * @module Main
 */
import PropTypes from 'prop-types'

/**
 * Styled components
 */
import { StyledMain } from './styled'

/**
 * Main Landmark component.
 *
 * @alias module:Main
 * @param children
 */
const Main = ({ children }) => (
  <StyledMain id="MainLandmark">{children}</StyledMain>
)

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
