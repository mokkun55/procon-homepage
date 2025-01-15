'use client'

import { Carousel as MantineCarousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

type Props = {
  images: string[]
  height?: string
  slideGap?: string
  controlSize?: number
  loop?: boolean
  withIndicators?: boolean
}

export const Carousel = ({
  images,
  height = '100%',
  slideGap = 'md',
  controlSize = 40,
  loop = true,
  withIndicators = true,
}: Props): React.ReactNode => {
  return (
    <MantineCarousel
      height={height}
      slideGap={slideGap}
      loop={loop}
      withIndicators={withIndicators}
      controlSize={controlSize}
    >
      {images.map((image, index) => (
        <MantineCarousel.Slide key={image}>
          <Image src={image} height={height} alt={`carousel-image-${index}`} />
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  )
}
