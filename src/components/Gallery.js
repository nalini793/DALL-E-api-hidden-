import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const rightBtnClick = () => {
    if (activeSlide === data.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  const leftBtnClick = () => {
    if (activeSlide === 0) {
      setActiveSlide(data.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const data = [
    {
      imageSrc:
        "https://preview.redd.it/33hvmuhb3l1a1.png?width=960&crop=smart&auto=webp&s=1d5988da5163205745ffb7ba854192f1593b473f",
      imageDesc: "Polar bear eating ice cream",
    },
    {
      imageSrc:
        "https://external-preview.redd.it/7HyQBS20EQunoZ-oFvP4R6o1t_rm2Ow1Ab2DrUhMjfQ.jpg?width=960&crop=smart&auto=webp&s=4bd120bab2bada229de6e848d15057ff6f9a0727",
      imageDesc: "Tobacco flavored tomatoes, National Geographic",
    },
    {
      imageSrc:
        "https://preview.redd.it/99excm8zfn1a1.jpg?width=960&crop=smart&auto=webp&s=bd82f6403eb285e501e89bb43a00f5af1915e73a",
      imageDesc: "Mickey and Minnie painted by Monet",
    },
    {
      imageSrc:
        "https://preview.redd.it/lcnlke25aj1a1.jpg?width=960&crop=smart&auto=webp&s=89dd9c27aa6754519bcedcbe1df0ec390b4eab92",

      imageDesc: "Cup of coffe with an universe inside",
    },
    {
      imageSrc:
        "https://preview.redd.it/j02mz1u57n1a1.png?width=640&crop=smart&auto=webp&s=ecc2abc73cb5e272ba909ee135b266281e6323eb",
      imageDesc: "Oscar Wilde if he were a 2010's hipster",
    },
    {
      imageSrc:
        "https://external-preview.redd.it/TDsdhVzjNmNV7wrftAAM6ACVRXbHiKXk3vJ4yLlv3S4.jpg?width=640&crop=smart&auto=webp&s=f79605a0e65edc932aa36747bf9e9f73dc87d209",
      imageDesc: "A fancy fox riding the London Underground",
    },

    {
      imageSrc:
        "https://preview.redd.it/tufjekkqlj1a1.png?width=640&crop=smart&auto=webp&s=20e35c7644335f0080fbc031548a14a43a7179da",
      imageDesc: "A person, disguised as an orange, boards a crowded airplane",
    },
  ];
  // console.log(data[activeSlide].imageSrc);
  const myImageStyle = {
    backgroundImage: `url(${data[activeSlide].imageSrc})`,
  };
  return (
    <div className="gallery-container" style={myImageStyle}>
      <div className="slider-container">
        <RenderPics
          imageSrc={data[activeSlide].imageSrc}
          imageDesc={data[activeSlide].imageDesc}
        ></RenderPics>
        <button onClick={leftBtnClick} className="arrow left-arrow" id="left">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          onClick={rightBtnClick}
          className="arrow right-arrow"
          id="right"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

function RenderPics(props) {
  const myImageStyle = {
    backgroundImage: `url(${props.imageSrc})`,
  };
  return (
    <div className="slide active" style={myImageStyle}>
      <p className="imageDesc">{props.imageDesc}</p>
    </div>
  );
}

export default Gallery;
