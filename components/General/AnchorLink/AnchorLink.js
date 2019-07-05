/**
 * @module AnchorLink
 */
import React from 'react'
import ReactLink from 'next/link'

/**
 * Helpers
 */
import { isExternal } from './helper'

/**
 * General AnchorLink component.
 *
 * Automatically detect when to render React Link and when regular anchor.
 *
 * @alias module:AnchorLink
 *
 * @param path {string}
 * @param target {string}
 * @param children
 * @param {object} attributes
 * @param className {string}
 */
const AnchorLink = ({path, target, children, attributes, className}) => (
  isExternal(path)
    ? (
      <a
        href={path}
        className={className}
        target={target}
        {...attributes}>
        {children}
      </a>
    )
    : (
      <ReactLink href={path}>
        <a className={className} {...attributes}>
          {children}
        </a>
      </ReactLink>
    )
)

AnchorLink.propTypes = {}

export default AnchorLink
