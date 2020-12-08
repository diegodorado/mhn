import styled from 'styled-components'

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: ${props => (props.isZooming ? 'visible' : 'hidden')};
`

export const Slider = styled.div`
  margin-top: 10px;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  width: ${props => (props.slidesCount*100) + '%'};
  user-select: none;
  touch-action: pan-y;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: ${props => (props.isZooming ? 20 : 0)};
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
`

export const SlideOverlay = styled.div`
  position: relative;
  z-index: ${props => (props.inFront ? 10 : 0)};
`

export const Epigraph = styled.div`
  text-align: center;
  padding: 1em 0 0.3em;
`

