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
          <p>Tech stack: React Javascript State management</p>
          <b>
            <a
              href="https://github.com/tebohonthako/apple-store"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
        </div>

        <div className="portfolio__item">
          <a
            href="https://tebohonthako.github.io/ticket-station-added-the-ticket-form/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Music Festival Ticketstation</h3> <br />
            <img
              src="https://tebohonthako.github.io/ticket-station-added-the-ticket-form/images/artists/jcole.webp"
              alt="ticektstation for music event"
              className="portfolio__img"
              id="ios-calculator"
            />
          </a>
          <p>Tech stack: Vanilla Javascript, Bootstrap & OOP </p>
          <b>
            <a
              href="https://github.com/tebohonthako/ticket-station-added-the-ticket-form"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
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
              src="https://yt3.googleusercontent.com/ytc/AIf8zZQKCG8w7wVznj9sHhrHge3cKYVuUblDUuOaUp_psQ=s900-c-k-c0x00ffffff-no-rj"
              alt="MovieLand App"
              className="portfolio__img"
            />
          </a>
          <p>Tech stack: React and RESTful API</p>
          <b>
            <a
              href="https://github.com/tebohonthako/my_first_react_app"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
        </div>

        <div className="portfolio__item">
          <a
            href="https://nientjie94.github.io/DevQuiz"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Dev Quiz game</h3> <br />
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg"
              alt="quiz game"
              className="portfolio__img"
              id="ios-calculator"
            />
          </a>
          <p>Tech stack: Vanilla Javascript</p>
          <b>
            <a
              href="https://github.com/tebohonthako/DevQuiz-1"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
        </div>

        <div className="portfolio__item">
          <a
            href="https://teboho-nthako-portfolio-2024.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>My portfolio</h3> <br />
            <img
              src="https://media.istockphoto.com/id/903044512/vector/user-icon-vector-with-laptop-computer-female-person-profile-avatar-for-business-and-online.jpg?s=612x612&w=0&k=20&c=iLtKPgwQGblmh9pOgJxVDepyCYyxYnV29j5WEP28rOo="
              alt="my react portfolio"
              className="portfolio__img"
              id="ios-calculator"
            />
          </a>
          <p>Tech stack: React Javascript ES6 Component-based</p>
          <b>
            <a
              href="https://github.com/tebohonthako/my-react-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </b>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
