import Slider from "slick-carousel";
import React from "react";
import Img01 from "../../assets/imgs/beneficios_membresia_fondos/2.jpg";
import Img02 from "../../assets/imgs/beneficios_membresia_fondos/3.jpg";
import Img03 from "../../assets/imgs/beneficios_membresia_fondos/4.jpg";
import Img04 from "../../assets/imgs/beneficios_membresia_fondos/5.jpg";
import Img05 from "../../assets/imgs/beneficios_membresia_fondos/6.jpg";
import Img06 from "../../assets/imgs/beneficios_membresia_fondos/7.jpg";
import Img07 from "../../assets/imgs/beneficios_membresia_fondos/8.jpg";
import Img08 from "../../assets/imgs/beneficios_membresia_fondos/9.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogitemSlide = () => {
  const data = [
    {
      name: "Tablero de Diseño",
      img: Img01,
      review:
        "Administre fácilmente su cola de diseño con un tablero de Trello.",
    },
    {
      name: "Tarifa Fija Mensual",
      img: Img02,
      review: "¡Sin sorpresas! Paga el mismo precio fijo cada mes.",
    },
    {
      name: "Entrega Rápida",
      img: Img03,
      review: "Obtenga su diseño uno a uno en solo un par de días en promedio.",
    },
    {
      name: "Calidad de Primera",
      img: Img04,
      review:
        "Calidad de diseño de primer nivel a tu alcance, siempre que la necesites.",
    },
    {
      name: "Flexible y Escalable",
      img: Img05,

      review:
        "Aumente o reduzca la escala según sea necesario y haga una pausa o cancele en cualquier momento.",
    },
    {
      name: "Diseño único",
      img: Img05,

      review: "Cada diseño está hecho especialmente para ti y es 100% tuyo.",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="my-20 slider-container">
        <Slider {...settings}>
          {data.map(({ name, review, img, index }) => (
            <div key={index} className=" h-[450px] text-black rounded-xl">
              <div className="rounded-t-xl flex justify-center items-center">
                <img src={img} alt="img" className="rounded-xl" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-gray-400">{review}</p>
                {/* <button className="bg-indigo-500 text-white px-6 py-1 rounded-2xl">
                  Puto el que lee
                </button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogitemSlide;
