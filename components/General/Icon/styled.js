import styled from 'styled-components'

export const Wrapper = styled.span`
  display: block;
  position: relative;
  width: 1.5em;

  svg {
    display: block;
    max-height: 100%;
    max-width: 100%;
    use {
      fill: currentColor;
    }
  }

  .inlineSvg svg {
    path,
    circle:not([fill="none"]),
    rect:not([fill="none"]),
    g {
       fill: currentColor;
    }
  }
`

export const SvgWrapper = styled.div`
  svg {
    fill: ${({defaultOptions}) => defaultOptions && defaultOptions.fill
      ? defaultOptions.fill
      : 'none'
    };
    use {
      fill: ${({defaultOptions}) => defaultOptions && defaultOptions.fill
        ? defaultOptions.fill
        : 'none'
      };
    }
    g {
      stroke: ${({defaultOptions}) => defaultOptions && defaultOptions.stroke
        ? defaultOptions.stroke
        : 'none'
      };
    }
  }
`
