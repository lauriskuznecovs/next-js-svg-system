/**
 * Styled components
 */
import { Title, StyledIcon, IconWrapper } from './styled'

/**
 * Icons
 */
/* eslint-disable import/no-unresolved */
import ArrowLeftIcon from '../../public/svg/original/arrow_left.svg?include'
import ArrowRightIcon from '../../public/svg/original/arrow_right.svg?include'
import CheckboxIcon from '../../public/svg/original/checkbox.svg?include'
import DocumentIcon from '../../public/svg/original/document.svg?include'
import FacebookIcon from '../../public/svg/original/facebook.svg?include'
import MailIcon from '../../public/svg/original/mail.svg?include'
import OpenExternalIcon from '../../public/svg/original/open_external.svg?include'

export default () => (
  <IconWrapper>
    <Title>Example of Inline SVG (using color from parent element)</Title>
    <StyledIcon src={ArrowLeftIcon} options={{ inlineSvg: true }} />
    <StyledIcon src={ArrowRightIcon} options={{ inlineSvg: true }} />
    <StyledIcon src={CheckboxIcon} options={{ inlineSvg: true }} />
    <StyledIcon src={DocumentIcon} options={{ inlineSvg: true }} />
    <StyledIcon src={FacebookIcon} options={{ inlineSvg: true }} />
    <StyledIcon src={MailIcon} options={{ inlineSvg: true }} />
    <StyledIcon src={OpenExternalIcon} options={{ inlineSvg: true }} />
  </IconWrapper>
)
