import { useState, useEffect } from "react";
import "./Banner.css";
import "animate.css";

const Banner = () => {
  const images = [
    {
      id: 1,
      image1: "https://i.ibb.co.com/9sQ9xdY/hindi3.jpg",
      image2: "https://i.ibb.co.com/FXT76bh/indian.png",
      name: "Learn Hindi Language",
      title: "Explore Our Website",
      quote:
        "Hindi is an Indo-Aryan language primarily spoken in India, written in the Devanagari script. It is one of India's official languages and is widely used in literature, media, and daily communication.",
    },
    {
      id: 2,
      image1: "https://i.ibb.co.com/4mZ1sdZ/arabic-4.jpg",
      image2: "https://i.ibb.co.com/S7rNnnb/arabic-flag.png",
      name: "Learn Arabic Language",
      title: "Explore Our Website",
      quote:
        "Arabic is a Semitic language spoken across the Arab world and is the liturgical language of Islam. It is known for its rich literary heritage and is written in a unique script from right to left.",
    },
    {
      id: 3,
      image1: "https://i.ibb.co.com/VQJPwSJ/frach.jpg",
      image2: "https://i.ibb.co.com/2K08tLt/franch-flag.png",
      name: "Learn french Language",
      title: "Explore Our Website",
      quote:
        "French is a Romance language spoken worldwide, especially in France, parts of Africa, Canada, and Europe. Known for its elegance, it is a global language of diplomacy, culture, and art.",
    },
    {
      id: 4,
      image1: "https://i.ibb.co.com/vYR7pr4/pakistan.jpg",
      image2: "https://i.ibb.co.com/RHH3phJ/pakistan.png",
      name: "Learn Urdhu Language",
      title: "Explore Our Website",
      quote:
        "Urdu is an Indo-Aryan language spoken mainly in Pakistan and parts of India, written in the Perso-Arabic script. Known for its poetic elegance, it is celebrated for its rich literary tradition and cultural significance.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="banner mt-5 lg:h-[60vh] md:h-[50vh] h-[40vh]">
      {images.map((item, itemIndex) => {
        const { id, image1, image2, name, title, quote } = item;

        return (
          itemIndex === index && (
            <div key={id} className="slide">
              <img src={image1} alt={name} className="slide-image" />
              <div className="slide-content">
                <h3 className="flex gap-5 animate__animated animate__fadeInDown justify-center items-center">
                  <span className="font-bold text-2xl md:text-3xl lg:text-5xl">
                    {name}
                  </span>
                  <img
                    className="md:w-20 md:h-20 w-12 h-12 rounded-full"
                    src={image2}
                    alt=""
                  />
                </h3>
                <h4 className="lg:text-2xl animate__animated animate__fadeInDown md:text-xl lg:py-4 py-2">
                  {title}
                </h4>
                <p className="text-text animate__animated animate__fadeInDown lg:text-xl md:max-w-[400px] lg:max-w-[600px]  lg:leading-8">
                  {quote}
                </p>
              </div>
            </div>
          )
        );
      })}
    </section>
  );
};

export default Banner;
