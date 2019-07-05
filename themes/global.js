import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default createGlobalStyle`
  ${styledNormalize}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
    line-height: 1.6;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1em;
    line-height: 1.6;
    box-sizing: border-box;
  }
  figure {
    margin: 0;
  }
  img {
    max-width: 100%;
  }
   a {
     color: ${({theme}) => theme.palette.link.active};
     &:hover {
       color: ${({theme}) => theme.palette.link.hover};
     }
   }
  svg {
    path,
    circle,
    rect,
    g {
      fill: inherit;
    }
  }
`
