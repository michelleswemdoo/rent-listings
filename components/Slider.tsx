'use client';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SimpleSliderProps = {
  children: React.ReactNode;
};

export const SimpleSlider = ({ children }: SimpleSliderProps) => {
  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider className="overflow-visible" {...settings}>
      {children}
    </Slider>
  );
};
