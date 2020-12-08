import styled from 'styled-components'

export const Slide = styled.div`
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  visibility: ${props => (props.isZooming && !props.active ? 'hidden' : 'visible')};
`
