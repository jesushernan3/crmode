import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img01 from "../../assets/imgs/estudiates/01.img.jpg";
import Img02 from "../../assets/imgs/estudiates/02.img.jpg";
import Img03 from "../../assets/imgs/estudiates/03.img.jpg";

function CenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const data = [
    {
      name: "yon malkobich",
      img: Img01,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempore doloremque est nam magnam nulla suscipit assumenda saepe rem tenetur quidem mollitia odit dicta eaque fugit tempora, autem harum. Quasi",
    },
    {
      name: "esteban tuero",
      img: Img02,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempore doloremque est nam magnam nulla suscipit assumenda saepe rem tenetur quidem mollitia odit dicta eaque fugit tempora, autem harum. Quasi",
    },
    {
      name: "deker morshian",
      img: Img03,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempore doloremque est nam magnam nulla suscipit assumenda saepe rem tenetur quidem mollitia odit dicta eaque fugit tempora, autem harum. Quasi",
    },
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map(({ name, review, img, index }) => (
          <div key={index} className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center">
              <img src={img} alt="img" className="h-44 w-44 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{name}</p>
              <p>{review}</p>
              <button className="bg-indigo-500 text-white px-6 py-1 rounded-2xl">
                Puto el que lee
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
