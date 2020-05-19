import React from "react"
import SlickSlider from "react-slick"
import { navigate } from "gatsby"
import { SliderContainer, Slide } from './styled'
import { useSliderData } from "./data"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Slider = () => {
  const edges = useSliderData()
  const slides = edges.map(({ node: { id, frontmatter } }) => ({
    id,
    ...frontmatter,
  }))

  const handleSlideClick = (path: string) => () => navigate(path)

  return (
    <SliderContainer>
      <SlickSlider infinite slidesToShow={1} autoplay>
        { slides.map(({ title, description, path }) => (
          <Slide onClick={handleSlideClick(path)}>
            <h1>{title}</h1>
            <p>{description}</p>
          </Slide>
        ))}
      </SlickSlider>
    </SliderContainer>
  )
}
