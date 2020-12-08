import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { defaultProps } from './constants'
import useSlider from './useSlider'
import Dots from './Dots'
import Slide from './Slide'
import SlideIndicator from './SlideIndicator'
import {
  Epigraph,
  Overlay as StyledOverlay,
  SlideOverlay as StyledSlideOverlay,
  Slider as StyledSlider,
  SliderWrapper,
} from './Slider.css'

const AnimatedOverlay = animated(StyledOverlay)
const AnimatedSlider = animated(StyledSlider)

export default function Slider({
  initialSlide,
  slides,
  slideOverlay,
  slideIndicatorTimeout,
  activeDotColor,
  dotColor,
}) {
  const [zooming, scale, currentSlide, bind, x, onScale] = useSlider({
    initialSlide,
    slides,
  })
  const epigraph = slides[currentSlide].props.epigraph
  return (
    <SliderWrapper isZooming={zooming}>
      {zooming && (
        <AnimatedOverlay
          style={{
            backgroundColor: scale
              .interpolate({ range: [1, 2, 10], output: [0, 0.7, 0.7] })
              .interpolate(opacity => `rgba(0, 0, 0, ${opacity})`),
          }}
        />
      )}

      <StyledSlideOverlay inFront={!zooming}>
        {slideOverlay}
        <SlideIndicator
          slideIndicatorTimeout={slideIndicatorTimeout}
          currentSlide={currentSlide}
          totalSlides={slides.length}
        />
      </StyledSlideOverlay>

      <AnimatedSlider
        isZooming={zooming}
        slidesCount={slides.length}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...bind()}
        style={{
          transform: x.interpolate(slideX => `translateX(${slideX}%`),
        }}
      >
        {slides.map((slide, idx) => {
          return(
          // eslint-disable-next-line react/no-array-index-key
            <Slide active={idx===currentSlide} isZooming={zooming} onScale={onScale} key={idx}>
              {slide}
            </Slide>
          )}
        )}
      </AnimatedSlider>
      <Epigraph>{epigraph}</Epigraph>

      <Dots
        totalSlides={slides.length}
        currentSlide={currentSlide}
        centerDots={slides.length < 6 ? slides.length : undefined}
        dotColor={dotColor}
        activeDotColor={activeDotColor}
      />

    </SliderWrapper>
  )
}

Slider.propTypes = {
  /** Index of the slide to be rendered by default */
  initialSlide: PropTypes.number,
  /** List of slides to render */
  slides: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Maximum zoom level */
  maxScale: PropTypes.number,
  /** Minimum zoom level */
  minScale: PropTypes.number,
  /** Content to overlay on the slider */
  slideOverlay: PropTypes.node,
  /** Time in ms until the slide indicator fades out. Set to `null` to disable this behavior. */
  slideIndicatorTimeout: PropTypes.number,
  /** Pagination dot color for the active slide */
  activeDotColor: PropTypes.string,
  /** Pagination dot color for all other slides */
  dotColor: PropTypes.string,
}

Slider.defaultProps = {
  initialSlide: defaultProps.initialSlide,
  maxScale: defaultProps.maxScale,
  minScale: defaultProps.minScale,
  slideOverlay: null,
  slideIndicatorTimeout: defaultProps.slideIndicatorTimeout,
  activeDotColor: defaultProps.activeDotColor,
  dotColor: defaultProps.dotColor,
}
