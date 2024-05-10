import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../../assets/img/slide1.png";
import "../Slider/slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/vVk61F2/slide2.webp)",
          }}
        >
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="flow -ml-48 min-h-screen  hero-content text-left text-neutral-content">
            <div className=" text-black -ml-72">
              <h1 className="mb-5 text-7xl font-bold poetsen">
                FIND FOOD <br /> RELIEF{" "}
              </h1>
              <p className="mb-5 text-xl">
                If you're in need of food relief,<br /> please use the search  below to
                find services providing food help near you.
              </p>
              <button className="btn font-semibold bg-[#febb00] hover:bg-[#000] hover:text-[#febb00]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* slider 2 */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/WHjC8Pj/slide1.png)",
          }}
        >
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="flow -ml-48 min-h-screen  hero-content text-left text-neutral-content">
            <div className=" text-black -ml-72">
              <h1 className="mb-5 text-7xl font-bold poetsen">1$ = 4 meals</h1>
              <p className="mb-5 text-xl">
                More people than ever need our help. Donate to our Giving Day
                and double your impact!
              </p>
              <button className="btn font-semibold bg-[#febb00] hover:bg-[#000] hover:text-[#febb00]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* slider 03 */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/bvVPBs7/petition-hero-banner.webp)",
          }}
        >
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="flow -ml-48 min-h-screen  hero-content text-left text-neutral-content">
            <div className=" text-black -ml-72">
              <h1 className="mb-5 text-7xl font-bold poetsen">LET'S END <br />
               FOOD WASTE <br />
                TO LANDFILL</h1>
                <p className="mb-5 text-xl">
                More people than ever need our help. Donate to our Giving Day <br />
                and double your impact!
              </p>
              <button className="btn font-semibold bg-[#febb00] hover:bg-[#000] hover:text-[#febb00]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
