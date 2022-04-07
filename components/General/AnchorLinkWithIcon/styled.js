import styled from 'styled-components'

export const Anchor = styled.a`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  :hover {
    svg {
      ${({ options }) =>
        options &&
        options.hover &&
        options.hover &&
        `fill: ${options.hover.fill}`};
      g {
        ${({ options }) =>
          options &&
          options.hover &&
          options.hover &&
          `stroke: ${options.hover.stroke}`};
      }
    }
  }
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;

  ${(props) =>
    props.iconOnLeft &&
    `
    margin-right: 0.5rem;
  `};

  ${(props) =>
    props.iconOnRight &&
    `
    margin-left: 0.5rem;
  `}
`
