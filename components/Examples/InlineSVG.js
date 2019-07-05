import React from 'react'

/**
 * Styled components
 */
import {
  Title,
  StyledIcon,
  IconWrapper,
} from './styled'

/**
 * Icons
 */
import ArrowLeftIcon from '../../static/svg/original/arrow_left.svg?include'
import ArrowRightIcon from '../../static/svg/original/arrow_right.svg?include'
import CheckboxIcon from '../../static/svg/original/checkbox.svg?include'
import DocumentIcon from '../../static/svg/original/document.svg?include'
import FacebookIcon from '../../static/svg/original/facebook.svg?include'
import MailIcon from '../../static/svg/original/mail.svg?include'
import OpenExternalIcon from '../../static/svg/original/open_external.svg?include'

export default () => (
  <IconWrapper>
    <Title>Example of Inline SVG (using color from parent element)</Title>
    <StyledIcon src={ArrowLeftIcon} options={{inlineSvg: true}} />
    <StyledIcon src={ArrowRightIcon} options={{inlineSvg: true}} />
    <StyledIcon src={CheckboxIcon} options={{inlineSvg: true}} />
    <StyledIcon src={DocumentIcon} options={{inlineSvg: true}} />
    <StyledIcon src={FacebookIcon} options={{inlineSvg: true}} />
    <StyledIcon src={MailIcon} options={{inlineSvg: true}} />
    <StyledIcon src={OpenExternalIcon} options={{inlineSvg: true}} />
  </IconWrapper>
)
