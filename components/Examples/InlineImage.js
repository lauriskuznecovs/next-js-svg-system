/**
 * Styled components
 */
import { Title, StyledIcon, IconWrapper } from './styled'

/**
 * Icons
 */
/* eslint-disable import/no-unresolved */
import ArrowLeftIcon from '../../public/svg/original/arrow_left.svg'
import ArrowRightIcon from '../../public/svg/original/arrow_right.svg'
import CheckboxIcon from '../../public/svg/original/checkbox.svg'
import DocumentIcon from '../../public/svg/original/document.svg'
import FacebookIcon from '../../public/svg/original/facebook.svg'
import MailIcon from '../../public/svg/original/mail.svg'
import OpenExternalIcon from '../../public/svg/original/open_external.svg'

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
