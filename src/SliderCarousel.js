import React from "react";
import Slider from "react-slick";
import './_slider.scss'
import sliderData from './sliderData.json'
import image0 from "./assets/avatar-anisha.png"
import image1 from "./assets/avatar-ali.png"
import image2 from "./assets/avatar-richard.png"
import image3 from "./assets/avatar-shanai.png"

const SliderCarousel = (props) => {

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    image0, image1, image2, image3
  ]
  const items = sliderData;
  const content = [];
  for (let i = 0; i < items.length; i++) {

    content.push(<>
      <div className="slider--body">
        <div className="slider--image">
          <img src={images[i]} />
        </div>
        <div className="slider--content">
          <h4 className="slider--title">{items[i].name}</h4>
          <p className="slider--comment">{items[i].comment}</p>
        </div>
      </div>
    </>)
  }

  return (
    <div className="slider--container">
      <Slider {...settings}>
        {content}
      </Slider>
    </div>
  );
}

export default SliderCarousel