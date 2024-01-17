import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Best Projects</span>
      <div className="skills__container container grid">
        <div>
          <div>
            <div className="about__container container grid">
              <a
                href="https://teboo-saaj-applestore.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Apple store ecommerce site</h3>
                <img
                  src="https://www.istore.co.za/media/catalog/product/i/p/iphone_15_plus_pink_pdp_image_position-1__wwen_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
                  alt="my professional profile"
                  className="about__img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
