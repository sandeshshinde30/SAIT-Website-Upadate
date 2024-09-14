import React, { useEffect } from "react";
import SvgImage0 from "../Assets/YouTube.png";
import SvgImage1 from "../Assets/LinkedIn.png";
import SvgImage2 from "../Assets/Instagram.png";
import SvgImage from "../Assets/amico.png";
import "../Style/Home.css";

function Home() {
  useEffect(() => {}, []);
  const text1 = "Beyond The Limitations ";
  const text2 = "Next To The Perfection";

  return (
    <div className="container w-[90%] rounded-3xl bg-gradient-to-b from-[#015DB9] to-[#022141] text-white">
      <section className="wrapper flex justify-center items-center p-4 md:p-12">
        <div className="container w-full mx-auto md:space-x-4 grid md:grid-cols-2  justify-center items-center">
          <div className="grid-item-1">
            <h1 className="overflow-hidden leading-6 text-white main-heading1 text-4xl md:text-4xl lg:text-5xl font-bold mb-4">
              {Array(text1).map((char, index) => (
                <span
                  className={`main-heading2 inline-block [animation-fill-mode:backwards] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient`}
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <br></br>
              {Array(text2).map((char, index) => (
                <span
                  className={`main-heading3 inline-block [animation-fill-mode:backwards] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient`}
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6">
              Discover a world of possibilities and perfection with us. Join our
              community and explore together !
            </p>
            <div className=" scale-90 md:scale-100 md:justify-normal flex space-x-6 mt-4 mb-3">
              <button className="bg-gray-400 w-16 h-16 flex justify-center items-center rounded-full bg-opacity-20 ">
                <a href="https://www.youtube.com/@wcesait5335/" target="_blank" rel="noreferrer"><img src={SvgImage0} alt="YouTube" className="h-16 invert" /></a>
              </button>
              <button className="bg-gray-400 w-16 h-16 flex justify-center items-center rounded-full bg-opacity-20 ">
                <a href="https://www.linkedin.com/company/wcesait/" target="_blank" rel="noreferrer"><img src={SvgImage1} alt="LinkedIn" className="h-8 invert" /></a>
              </button>
              <button className="bg-gray-400 w-16 h-16 flex justify-center items-center rounded-full bg-opacity-20 ">
                <a href="https://www.instagram.com/wce_sait/"  target="_blank" rel="noreferrer"><img src={SvgImage2} alt="Instagram" className="h-8 invert" /></a>
              </button>
            </div>
          </div>
          <div className="md:ml-4 grid-item-2">
            <div className="mx-auto w-fit">
              <img
                src={SvgImage}
                alt="team-img"
                className=" drop-shadow-xl z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
