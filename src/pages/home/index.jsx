import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import homeImg from "../../assets/images/homeImg.jpg"; // Import the image

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Home | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${homeImg})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro">
                <h2 className="" style={{ fontFamily: "cursive" }}>
                  I’m{" "}
                  <h1 className=" d-inline " style={{ fontFamily: "inherit" }}>
                    {introdata.title}
                  </h1>
                </h2>

                <h1
                  className="fluidz-48 text"
                  style={{ fontFamily: "inherit" }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="" style={{ fontFamily: "inherit" }}>
                  {introdata.description}
                </p>
                <div className="intro_btn-action pb-5">
                  <a
                    href="https://dochub.com/om-shinde-rpn0qm/5lae27DR5qxmy8zRmqjZv1/om-shinde-resume-2-pdf"
                    className="text_2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      id="button_p"
                      className="ac_btn btn"
                      style={{ fontFamily: "inherit" }}
                    >
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <Link to="/Projects">
                    <div id="button_h" className="ac_btn btn">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
