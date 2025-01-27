'use client'

import { Carousel as MantineCarousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import styles from './index.module.scss'

type Props = {
  images: string[]
  height?: string
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
  const autoplay = useRef(isAutoplay ? Autoplay({ delay }) : null)

  // 画像が1つしか無いとき
  if (images.length === 1) {
    return <Image src={images[0]} height={height} alt="work-image" />
  }

  return (
    <MantineCarousel
      classNames={{
        control: styles.control,
      }}
      height={height}
      slideGap={slideGap}
      loop={loop}
      withIndicators={withIndicators}
      controlSize={controlSize}
      plugins={autoplay.current ? [autoplay.current] : []}
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
