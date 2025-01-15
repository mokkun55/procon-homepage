'use client'

import { Carousel as MantineCarousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

type Props = {
  images: string[]
  height: number
  slideGap?: string
  loop?: boolean
  withIndicators?: boolean
}

export const Carousel = ({
  images,
  height,
  slideGap = 'md',
  loop = true,
  withIndicators = true,
}: Props): React.ReactNode => {
  console.log(images)
  return (
    <MantineCarousel height={height} slideGap={slideGap} loop={loop} withIndicators={withIndicators}>
      {images.map((image, index) => (
        <MantineCarousel.Slide key={image}>
          <Image src={image} height={height} alt={`carousel-image-${index}`} />
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  )
}
