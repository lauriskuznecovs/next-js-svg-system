/**
 * General components
 */
import AnchorLinkWithIcon from '../General/AnchorLinkWithIcon'

/**
 * Styled components
 */
import { Title } from './styled'

/**
 * Icons
 */
/* eslint-disable import/no-unresolved */
import ArrowRightIcon from '../../public/svg/original/arrow_right.svg?include'
import DocumentIcon from '../../public/svg/original/document.svg?include'

export default () => (
  <>
    <Title>Example of Anchor link with icon (icon before)</Title>
    <AnchorLinkWithIcon
      path="#some-internal-link"
      icon={{
        src: DocumentIcon,
        iconOnLeft: true,
      }}
    >
      Link with icon on left
    </AnchorLinkWithIcon>

    <Title>Example of Anchor link with icon (icon after)</Title>
    <AnchorLinkWithIcon
      path="#some-internal-link"
      icon={{
        src: ArrowRightIcon,
        iconOnRight: true,
      }}
    >
      Link with icon on right
    </AnchorLinkWithIcon>

    <Title>Example of Anchor link with icon (external link)</Title>
    <AnchorLinkWithIcon
      path="https://google.com"
      icon={{
        iconOnRight: true,
      }}
    >
      External link
    </AnchorLinkWithIcon>
  </>
)
