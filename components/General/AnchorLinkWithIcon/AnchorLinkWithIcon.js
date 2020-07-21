/**
 * @module AnchorLinkWithIcon
 */
import React from 'react'
import PropTypes from 'prop-types'
import ReactLink from 'next/link'

/**
 * Helpers
 */
import {
  IconWithText,
  isExternal,
} from './helper'

/**
 * Styled components
 */
import {
  Anchor,
} from './styled'

/**
 * Icons
 */
import ExternalIcon from '../../../public/svg/open_external.svg?include'

/**
 * General Link component with icon.
 *
 * Display svg icon before/after the link text.
 * Automatically detect external link, in that case external icon is added.
 *
 * @alias module:AnchorLinkWithIcon
 *
 * @param {string} path
 * @param {string} target
 * @param {object} icon
 * @param children
 * @param {string} className
 */
const AnchorLinkWithIcon = ({
  path,
  target,
  icon: {
    src,
    options = {
      inlineSvg: true,
    },
    iconOnLeft = false,
    iconOnRight = false,
  } = {},
  children,
  className,
}) => {
  const external = isExternal(path)
  return (
    external ? (
      <Anchor
        href={path}
        className={className}
        target={target}
        options={options}
        external={external}>
        <IconWithText
          src={ExternalIcon}
          options={options}
          iconOnLeft={iconOnLeft}
          iconOnRight={iconOnRight}>
          {children}
        </IconWithText>
      </Anchor>
    )
    : (
      <ReactLink href={path}>
        <Anchor
          href={path}
          className={className}
          options={options}
          external={external}>
          <IconWithText
            src={src}
            options={options}
            iconOnLeft={iconOnLeft}
            iconOnRight={iconOnRight}>
            {children}
          </IconWithText>
        </Anchor>
      </ReactLink>
    )
  )
}

AnchorLinkWithIcon.propTypes = {
  path: PropTypes.string.isRequired,
  target: PropTypes.string,
  icon: PropTypes.shape({
    src: PropTypes.string,
    options: PropTypes.shape({
      default: PropTypes.shape({
        fill: PropTypes.string,
        stroke: PropTypes.string,
      }),
      hover: PropTypes.shape({
        fill: PropTypes.string,
        stroke: PropTypes.string,
      }),
    }),
    iconOnLeft: PropTypes.bool,
    iconOnRight: PropTypes.bool,
  }).isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
}

export default AnchorLinkWithIcon
