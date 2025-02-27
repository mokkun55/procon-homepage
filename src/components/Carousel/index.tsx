'use client'

import { Carousel as MantineCarousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef } from 'react'

type Props = {
  images: string[]
  height?: number | string
  slideGap?: string
  controlSize?: number
  loop?: boolean
  withIndicators?: boolean
  isAutoplay?: boolean
  delay?: number
}

export const Carousel = ({
  images,
  height = '100%',
  slideGap = 'md',
  controlSize = 40,
  loop = true,
  withIndicators = true,
  isAutoplay = false,
  delay = 4000,
}: Props): React.ReactNode => {
  const autoplay = useRef<ReturnType<typeof Autoplay> | null>(null)

  useEffect(() => {
    if (isAutoplay) {
      autoplay.current = Autoplay({ delay })
    }
  }, [isAutoplay, delay])

  if (images.length === 1) {
    return <Image src={images[0]} height={height} alt="work-image" />
  }

  return (
    <MantineCarousel
      height={height}
      slideGap={slideGap}
      loop={loop}
      withIndicators={withIndicators}
      controlSize={controlSize}
      plugins={autoplay.current ? [autoplay.current] : []}
      className="custom-carousel"
      onMouseEnter={autoplay.current ? autoplay.current.stop : undefined}
      onMouseLeave={autoplay.current ? autoplay.current.reset : undefined}
    >
      {images.map((image, index) => (
        <MantineCarousel.Slide key={image}>
          <Image src={image} height={height} alt={`work-image-${index}`} />
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  )
}
