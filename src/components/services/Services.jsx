import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        <div classname="services__content">
          <div>
            <i className="uil uil services__icon"></i>
            <h3 className="services__title">Full-stack developer</h3>
            <span className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times"></i>
                <h3 className="services__modal-title">Front-end development</h3>
                <br></br>
                <p className="services__modal-description">
                  Services with 1 year experience. Providing quality work to
                  clients and companies
                </p>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">Web app development</p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Creating and implementing user interface components using
                      React.
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      anaging the state of the application using React's state
                      management or external state management libraries like
                      Redux
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">API Integration</p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Optimizing the performance of the application by improving
                      code efficiency, reducing unnecessary re-renders, and
                      optimizing network requests.
                    </p>
                  </i>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
