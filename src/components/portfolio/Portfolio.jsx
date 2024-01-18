import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Best Projects</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__item">
          <a
            href="https://teboo-saaj-applestore.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Apple store ecommerce site</h3> <br />
            <img
              src="https://www.istore.co.za/media/catalog/product/i/p/iphone_15_plus_pink_pdp_image_position-1__wwen_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
              alt="Apple store project"
              className="portfolio__img"
            />
          </a>
        </div>

        <div className="portfolio__item">
          <a
            href="https://tebohonthako.github.io/my-calculator/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>iOS Calculator clone</h3> <br />
            <img
              src="https://help.apple.com/assets/6525D505752940BC7C002221/6525D5095058A5A6C00A05B9/en_US/e726abd62a7d08749d3a882889cdc78d.png"
              alt="iOS calculator clone"
              className="portfolio__img"
              id="ios-calculator"
            />
          </a>
        </div>

        <div className="portfolio__item">
          <a
            href="https://teboos-movieland.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>React MovieLand</h3>
            <br />
            <img
              src="src/assets/movieland.png"
              alt="MovieLand App"
              className="portfolio__img"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
