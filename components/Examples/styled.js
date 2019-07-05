import styled from 'styled-components'

/**
 * General components
 */
import Icon from '../General/Icon'

export const Title = styled.h2``

export const IconWrapper = styled.div`
  color: ${({theme}) => theme.palette.secondary};
`

export const StyledIcon = styled(Icon)`
  display: inline-block;
`
