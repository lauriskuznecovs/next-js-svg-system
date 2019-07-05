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
import ArrowLeftIcon from '../../static/svg/original/arrow_left.svg'
import ArrowRightIcon from '../../static/svg/original/arrow_right.svg'
import CheckboxIcon from '../../static/svg/original/checkbox.svg'
import DocumentIcon from '../../static/svg/original/document.svg'
import FacebookIcon from '../../static/svg/original/facebook.svg'
import MailIcon from '../../static/svg/original/mail.svg'
import OpenExternalIcon from '../../static/svg/original/open_external.svg'

export default () => (
  <IconWrapper>
    <Title>Example of Inline Image (using default icon color)</Title>
    <StyledIcon src={ArrowLeftIcon} />
    <StyledIcon src={ArrowRightIcon} />
    <StyledIcon src={CheckboxIcon} />
    <StyledIcon src={DocumentIcon} />
    <StyledIcon src={FacebookIcon} />
    <StyledIcon src={MailIcon} />
    <StyledIcon src={OpenExternalIcon} />
  </IconWrapper>
)
