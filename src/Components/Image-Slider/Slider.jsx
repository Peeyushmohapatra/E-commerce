import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import { carouselList } from "../../Essentials/Carousellist";

const Slider = () => {
  return (
    <div>
      <Carousel>
        {carouselList.map((ele) => {
          return (
            <Carousel.Item>
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

export default Slider;
