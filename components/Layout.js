import { ThemeProvider } from 'styled-components'

import theme from '../themes/theme'
import GlobalStyle from '../themes/global'

/**
 * App Layout component.
 *
 * @param children {node}
 * @returns {*}
 */
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  </ThemeProvider>
)
