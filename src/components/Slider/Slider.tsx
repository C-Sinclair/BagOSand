import React from "react"
import SlickSlider from "react-slick"
import { navigate } from "gatsby"
import { SliderContainer, Slide, Title, Description } from './styled'
import { useSliderData } from "./data"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Slider = () => {
  const { images, products } = useSliderData()
  const slides = products.map(({ node: { id, frontmatter } }) => ({ id, ...frontmatter }))

  const handleSlideClick = (path: string) => () => navigate(path)

  return (
    <SliderContainer>
      <SlickSlider infinite slidesToShow={1} autoplay>
        { slides.map(({ title, description, path }, index) => (
          <Slide 
            onClick={handleSlideClick(path)}
            Tag='article' 
            fluid={images[index]}
            backgroundColor={`#000000`}
          >
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Slide>
        ))}
      </SlickSlider>
    </SliderContainer>
  )
}
