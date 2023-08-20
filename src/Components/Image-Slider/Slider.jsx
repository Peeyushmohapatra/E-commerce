import React, { memo } from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import { carouselList } from "../../Essentials/Carousellist";

const Slider = () => {
  return (
    <div>
      <Carousel>
        {carouselList.map((ele,idx) => {
          return (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={ele.src}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{ele.name}</h3>
                <p>
                  {ele.disc}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default memo(Slider);
