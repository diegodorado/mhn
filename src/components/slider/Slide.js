import React ,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import { animated, interpolate } from 'react-spring'
import useZoom from './useZoom'
import { defaultProps } from './constants'
import { Slide as StyledSlide } from './Slide.css'

const AnimatedSlide = animated(StyledSlide)

export default function Slide({ children, zoom, onScale, minScale, maxScale }) {
  const [element, scale, translateX, translateY, middleTouchOnElement, set] = useZoom({
    minScale,
    maxScale,
    onScale,
  })

  useEffect(() => {
    set({
      scale: zoom > 0 ? maxScale : minScale,
      immediate: false,
    })
  }, [zoom,set])


  return (
    <AnimatedSlide
      ref={element}
      style={{
        transform: interpolate(
          [scale, translateX, translateY],
          (sc, x, y) => `translate3d(${x}px, ${y}px, 0) scale3d(${sc}, ${sc}, 1)`
        ),
        transformOrigin: middleTouchOnElement.interpolate((x, y) => `${x}px ${y}px 0`),
      }}
    >
      {children}
    </AnimatedSlide>
  )
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  onScale: PropTypes.func,
  minScale: PropTypes.number,
  maxScale: PropTypes.number,
}

Slide.defaultProps = {
  onScale: undefined,
  maxScale: defaultProps.maxScale,
  minScale: defaultProps.minScale,
}
