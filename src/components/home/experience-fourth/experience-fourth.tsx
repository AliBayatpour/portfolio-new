import React, { useEffect } from "react";
import style from "./experience-fourth.module.scss";
import { ReactComponent as SingleEarth } from "../../../assets/home/single-earth.svg";
import { ReactComponent as ReactLogo } from "../../../assets/home/react.svg";
import { ReactComponent as Redux } from "../../../assets/home/redux.svg";
import { ReactComponent as Angular } from "../../../assets/home/angular.svg";
import { ReactComponent as Universal } from "../../../assets/home/universal.svg";
import { ReactComponent as Golang } from "../../../assets/home/go.svg";
import { ReactComponent as NodeJs } from "../../../assets/home/nodejs.svg";
import { ReactComponent as Grpc } from "../../../assets/home/grpc.svg";
import { ReactComponent as Docker } from "../../../assets/home/docker.svg";
import { ReactComponent as NextJs } from "../../../assets/home/next-js.svg";
import { ReactComponent as Gatsby } from "../../../assets/home/gatsby.svg";
import { ReactComponent as Graphql } from "../../../assets/home/graphql.svg";
import { ReactComponent as TypeScript } from "../../../assets/home/typescript.svg";
import { ReactComponent as JavaScript } from "../../../assets/home/javascript.svg";
import { ReactComponent as Html } from "../../../assets/home/html.svg";
import { ReactComponent as Scss } from "../../../assets/home/sass.svg";
import { ReactComponent as Css } from "../../../assets/home/css.svg";
import { gsap } from "gsap";

const ExperienceFourth: React.FC = () => {
  useEffect(() => {
    const waterBoxTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    waterBoxTimeline.to(".waterBox", {
      x: -20,
      y: -5,
      stagger: 0.03,
      duration: 0.5,
    });
    return () => {
      waterBoxTimeline.kill();
    };
  }, []);
  return (
    <div className={`w-100 container pb-5 ${style.contentBox}`}>
      <div className="row">
        <h1 className={`${style.contentBox__title} mb-5 text-uppercase`}>
          My Work life
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <h3 className={`${style.contentBox__timeline} mb-3`}>
            Sep 2020 - Present
          </h3>
          <div className={style.contentBox__placeBox}>
            <SingleEarth />
          </div>
          <h5 className={`${style.contentBox__activity} text-uppercase mt-4`}>
            Frontend Web Developer (1 Year)
          </h5>
          <p>
            <i className={`${style.contentBox__activity} text-uppercase`}>
              Single.Earth · Full-time (Estonia)
            </i>
          </p>
        </div>
        <div className="col-12 col-lg-8 mt-5">
          <div className="row overflow-hidden">
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">React</p>
                <ReactLogo height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Redux</p>
                <Redux height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Angular</p>
                <Angular height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Universal</p>
                <Universal height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Golang</p>
                <Golang height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Grpc</p>
                <Grpc height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Node.js</p>
                <NodeJs height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Docker</p>
                <Docker height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">TypeScript</p>
                <TypeScript height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Next.js</p>
                <NextJs height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">GatsbyJs</p>
                <Gatsby height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">GraphQl</p>
                <Graphql height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">SCSS</p>
                <Scss height={30} />
              </div>
            </div>

            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">JavaScript</p>
                <JavaScript height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">HTML</p>
                <Html height={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">CSS</p>
                <Css height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={`${style.contentBox__description}`}>
        My next job was Single.Earth was such a terrific experience working in a
        financial industry where security, hard work, passion, and being a team
        player were among the most critical factors.
      </p>
      <ul className={`${style.contentBox__listBox}`}>
        <li>Building websites with Gatsby and Next.js</li>
        <li>Using both GraphQl and REST API depending on the project</li>
        <li>
          Working with map libraries such as Leaflet, Mapbox, and Tiles, and
          Geospatial analysis libraries like TurfJs
        </li>
        <li>Write maintainable and scalable code as always</li>
        <li>Follow Scrum Framework and Agile methodologies' best practices</li>
      </ul>
    </div>
  );
};

export default ExperienceFourth;
