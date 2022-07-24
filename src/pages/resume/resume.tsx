import { Fragment } from "react";
import styles from "./resume.module.scss";
import { ReactComponent as Phone } from "../../assets/resume/call.svg";
import { ReactComponent as Email } from "../../assets/resume/email.svg";
import { ReactComponent as Web } from "../../assets/resume/web.svg";
import { ReactComponent as Linkedin } from "../../assets/resume/linkedin.svg";
import { ReactComponent as StackOverflow } from "../../assets/resume/stack-overflow.svg";
import { ReactComponent as Address } from "../../assets/resume/address.svg";

const Resume: React.FC = () => {
  return (
    <Fragment>
      <div className={`${styles.container} pb-5`}>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-3">
              <div className="d-flex justify-content-center">
                <div
                  className={`${styles.profilePicContainer} rounded-circle`}
                ></div>
              </div>
            </div>
            <div className={`${styles.portfolio} col-lg-9 mt-3`}>
              <h2>Profile</h2>
              <p className="text-white">
                Hi, I'm Ali, a software engineer based in Tallinn. I've been in
                the software academic and working environment for <b>9 years</b>
                . I studied Computer Science as my bachelor's and MBA with a
                focus on Software Project management as my master's while
                working as a software engineer. It's been almost four years that
                I've been working as a web developer in different roles,
                including Freelance web developer, Front-end, Full-stack, and
                Software development team lead.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3">
              <div className={`${styles.sideInfo} text-white`}>
                <h4 className={`${styles.sideInfo__title} mb-3 text-center`}>
                  Contacts
                </h4>
                <div className="d-flex justify-content-center">
                  <div>
                    <div className="d-flex align-items-center my-2">
                      <Phone />
                      <p className="mb-0 ms-2">+37256193750</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <Email />
                      <p className="mb-0 ms-2">aliglbayatpour@gmail.com</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <Web />
                      <p className="mb-0 ms-2">alibayatpour.com</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <Linkedin />
                      <p className="mb-0 ms-2 mt-1">
                        linkedin.com/in/ali-bayatpour-b0179912a/
                      </p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <StackOverflow />
                      <p className="mb-0 ms-2 mt-1">
                        stackoverflow.com/users/12576676/ali-bayatpour
                      </p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <Address />
                      <p className="mb-0 ms-2 mt-1">
                        Tööstuse 83, 10416, Tallinn, Estonia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.sideInfo} mt-5`}>
                <h4 className={`${styles.sideInfo__title} mb-3 text-center`}>
                  Skills
                </h4>
                <div className={`${styles.sideInfo__chips} d-flex flex-wrap`}>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    React
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Redux
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Angular
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    RXJS
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    TypeScript
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    JavaScript
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Golang
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Testing
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    CI/CD
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    NGINX
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Docker
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Node.js
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Next.js
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    GatsbyJs
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    GraphQl
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Grpc
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    Ionic
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    HTML
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    CSS
                  </div>
                  <div className={`${styles.chip} text-white px-2 me-2 mt-2`}>
                    SCSS
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={`${styles.experiences}`}>
                <h3 className={`${styles.mainTitle} mb-4`}>Work Experience</h3>
                <div className={`${styles.experience} mb-4 text-white`}>
                  <div className="mb-4">
                    <h4 className={`${styles.companyName}`}>Single.Earth</h4>
                    <p className={`${styles.companyTimeLine}`}>1yr 11mos</p>
                  </div>
                  <div
                    className={`${styles.experience__contentWrapper} position-relative`}
                  >
                    <div
                      className={`${styles.experience__content} ps-2 position-relative`}
                    >
                      <span
                        className={`${styles.dot} position-absolute rounded-circle`}
                      ></span>
                      <h4 className={`${styles.position}`}>
                        Software Development Team Lead
                      </h4>
                      <p className={`${styles.timeline}`}>Dec 2021 - Present</p>
                      <p>Responsibilities:</p>
                      <ul>
                        <li>
                          Writing Go on the backend and Angular on the Front-end
                          side.
                        </li>
                        <li>
                          Following best practices and clean code architecture
                        </li>
                        <li>
                          Writing unit and integration tests with Jest, Jasmine
                          and Karma.
                        </li>
                        <li>
                          Working closely with product managers to convert
                          business tasks to technical tasks for the team
                        </li>
                        <li>
                          Support the engineering team with code reviews, pair
                          programming, and practical workshops.
                        </li>
                      </ul>
                    </div>
                    <div
                      className={`${styles.experience__content} ps-2 position-relative`}
                    >
                      <span
                        className={`${styles.dot} position-absolute rounded-circle`}
                      ></span>
                      <h4 className={`${styles.position}`}>
                        Front-end Developer
                      </h4>
                      <p className={`${styles.timeline}`}>
                        Sep 2020 - Aug 2021
                      </p>
                      <p>Responsibilities:</p>
                      <ul>
                        <li>
                          Writing React(TypeScript) and Angular on the Front-end
                          side.
                        </li>
                        <li>
                          State management tools Redux for React and Rxjs for
                          Angular
                        </li>
                        <li>Working closely with designers</li>
                        <li>Writing clean code and high-performant code.</li>
                        <li>Build SEO-friendly apps</li>
                        <li>
                          Being able to work with Next.js and Angular Universal
                          for supporting server-side rendering.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${styles.experience} mt-5 mb-4 text-white`}>
                  <div className="mb-4">
                    <h4 className={`${styles.companyName}`}>NatureHub</h4>
                    <p className={`${styles.companyTimeLine}`}>4 mos</p>
                  </div>
                  <div
                    className={`${styles.experience__contentWrapper} position-relative`}
                  >
                    <div
                      className={`${styles.experience__content} ps-2 position-relative`}
                    >
                      <span
                        className={`${styles.dot} position-absolute rounded-circle`}
                      ></span>
                      <h4 className={`${styles.position}`}>
                        Frontend Web Developer
                      </h4>
                      <p className={`${styles.timeline}`}>
                        Jun 2020 - Sep 2020
                      </p>
                      <p>Responsibilities:</p>
                      <ul>
                        <li>Building Web Apps with Angular</li>
                        <li>Building Mobile Apps with Ionic + Angular </li>
                        <li>Building fast SEO-friendly products</li>
                        <li>Working closely with designers</li>
                        <li>Focus on the improving UI and UX</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${styles.experience} mt-5 mb-4 text-white`}>
                  <div className="mb-4">
                    <h4 className={`${styles.companyName}`}>Self-employed</h4>
                    <p className={`${styles.companyTimeLine}`}>1 yr 5 mos</p>
                  </div>
                  <div
                    className={`${styles.experience__contentWrapper} position-relative`}
                  >
                    <div
                      className={`${styles.experience__content} ps-2 position-relative`}
                    >
                      <span
                        className={`${styles.dot} position-absolute rounded-circle`}
                      ></span>
                      <h4 className={`${styles.position}`}>
                        Freelance Web Development
                      </h4>
                      <p className={`${styles.timeline}`}>
                        Jun 2020 - Sep 2020
                      </p>
                      <p>Responsibilities:</p>
                      <ul>
                        <li>Building Web Apps with React + TypeScript</li>
                        <li>
                          Building SEO-friendly and beautiful web apps for
                          different industries including: Digital Agencies, Real
                          Estate, Restaurants(Online Food Order), Digital Market
                          and many more.
                        </li>
                        <li>
                          Building browser based games with complex animations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 className={`${styles.mainTitle} mt-5 mb-4`}>Education </h3>
                <div className={`${styles.experience} my-3 text-white`}>
                  <div className="mb-4">
                    <h4 className={`${styles.companyName}`}>
                      Tallinn University of Technology
                    </h4>
                  </div>
                  <div
                    className={`${styles.experience__contentWrapper} position-relative`}
                  >
                    <div
                      className={`${styles.experience__content} ps-2 position-relative`}
                    >
                      <span
                        className={`${styles.dot} position-absolute rounded-circle`}
                      ></span>
                      <h4 className={`${styles.position}`}>
                        Master's degree, MBA (Software Project Management)
                      </h4>
                      <p className={`${styles.timeline}`}>2019 - Jan 2022</p>
                      <ul>
                        <li>
                          Thesis Topic: Usefulness of the Scrum, A Study Among
                          Startups.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${styles.experience} my-3 text-white`}>
                  <div className="mt-5 mb-4">
                    <h4 className={`${styles.companyName}`}>
                      Persian Gulf University
                    </h4>
                  </div>
                  <div
                    className={`${styles.experience__contentWrapper} position-relative`}
                  >
                    <div
                      className={`${styles.experience__content} ps-2 position-relative`}
                    >
                      <span
                        className={`${styles.dot} position-absolute rounded-circle`}
                      ></span>
                      <h4 className={`${styles.position}`}>
                        Bachelor's degree, Computer Software Engineering
                      </h4>
                      <p className={`${styles.timeline}`}>2014 - 2018</p>
                      <ul>
                        <li>Academic projects with Java, C, VHDL, C#</li>
                        <li>Professor Assistant in Data Structures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
