import { useRef, useState, useCallback } from 'react'
import { useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { clamp } from './helpers'

export default function useSlider({ initialSlide, slides }) {
  const [{ x, scale }, set] = useSpring(() => ({
    x: 100 * initialSlide/ slides.length,
    scale: 1,
    config: { tension: 270, clamp: true },
  }))

  const index = useRef(initialSlide)

  // Slide numbers (for display purposes only)
  const [currentSlide, updateSlide] = useState(initialSlide)
  const [zooming, setZooming] = useState(false)

  const onScale = useCallback(
    slideProps => {
      set({ scale: slideProps.scale })
      if (slideProps.scale === 1) {
        setZooming(false)
      } else {
        setZooming(true)
      }
    },
    [set]
  )

  const bind = useGesture({
    onDrag: ({ 
      xy,
      tap,
      down,
      movement: [xMovement],
      direction: [xDir],
      distance,
      swipe: [swipeX],
      cancel,
      touches,
    }) => {
      // We don't want to interrupt the pinch-to-zoom gesture
      if (touches > 1) {
        cancel()
      }

      if(tap){
        const slideDir = (xy[0] > window.innerWidth /2) ? 1 : -1
        index.current = clamp(index.current + slideDir, 0, slides.length - 1)
      }

      // We have swiped past halfway
      if (!down && distance > window.innerWidth / 2) {
        // Move to the next slide
        const slideDir = xDir > 0 ? -1 : 1
        index.current = clamp(index.current + slideDir, 0, slides.length - 1)
      } else if (swipeX !== 0) {
        // We have detected a swipe - update the new index
        index.current = clamp(index.current - swipeX, 0, slides.length - 1)
      }

      const delta = xMovement / window.innerWidth
      // Animate the transition
      set({
        x: (-index.current + (down ? delta : 0)) * 100/ slides.length ,
        immediate: down,
      })

      // Update the slide number for display purposes
      updateSlide(index.current)
    },
  },{
      drag:{
        axis: 'x',
        bounds: {
          left: currentSlide === slides.length - 1 ? 0 : -Infinity,
          right: index.current === 0 ? 0 : Infinity,
          top: 0,
          bottom: 0,
        },
        rubberband: true,
        enabled: slides.length > 1,
      }
  })

  return [zooming, scale, currentSlide, bind, x, onScale]
}
