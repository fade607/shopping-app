import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../css/slider.css";

// const images = [
//   { url: ".././images/slider4.jpg" },
//   { url: ".././images/slider2.jpg" },
//   { url: ".././images/slider3.jpg" },
//   { url: ".././images/slider4.jpg" },
//   { url: ".././images/slider5.jpg" },
//   { url: ".././images/slider6.jpg" },
//   { url: ".././images/slider7.jpg" },
//   { url: ".././images/slider8.jpg" },
//   { url: ".././images/slider9.jpg" },
//   { url: ".././images/slider10.jpg" },
// ];

function slider() {
  return (
    <div className="slidbar">
      <AliceCarousel autoPlay autoPlayInterval="5000">
        <img src={".././images/slider9.jpg"} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}

export default slider;
