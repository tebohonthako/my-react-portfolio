import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs" id="tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon">
              Education
            </i>

            <div className="qualification__button button--flex qualification__active">
              <i className="uil uil-briefcase-alt qualification__icon">
                Experience
              </i>
            </div>
          </div>

          <div className="qualification sections">
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Full-stack development Coding Bootcamp
                  </h3>
                  <span className="qualification__subtitle">
                    Melsoft Academy
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> April - Oct 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* end of eduction 1 */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Junior Software Developer
                  </h3>
                  <span className="qualification__subtitle">Melsoft</span>

                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> May 2023 - Present
                  </div>
                </div>
              </div>

              {/* end of education 2 */}

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Honors Degree</h3>
                  <span className="qualification__subtitle">
                    University Of The Freestate
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> Feb 2018 - Dec 2018
                  </div>
                </div>
              </div>
              {/* end of eduction 3 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
