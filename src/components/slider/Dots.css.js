import styled, { css } from 'styled-components'

const TOTAL_SPACE = 14
const SIZES = [8, 6, 4]

const getSize = () => props => {
  const size = SIZES[props.distance] || 0
  const margin = size !== 0 ? (TOTAL_SPACE - size) / 2 : 0

  return css`
    width: ${size}px;
    height: ${size}px;
    margin: 0 ${margin}px;
  `
}

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`

export const Dot = styled.div`
  ${getSize()}
  background: ${props => (props.active ? props.activeDotColor : props.dotColor)};
  border-radius: 50%;
  transition: width 300ms ease-in-out, height 300ms ease-in-out, margin 300ms ease-in-out;
`

export const ZoomDot = styled.div`
  cursor: pointer;
  line-height: 12px;
  width: 12px;
  height: 12px;
  margin: 0 5px;
`
