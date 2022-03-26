import React, { useEffect } from "react";
import style from "./experience-third.module.scss";
import { ReactComponent as Naturehub } from "../../../assets/home/naturehub.svg";
import { ReactComponent as Angular } from "../../../assets/home/angular.svg";
import { ReactComponent as Ionic } from "../../../assets/home/ionic.svg";
import { ReactComponent as TypeScript } from "../../../assets/home/typescript.svg";
import { ReactComponent as JavaScript } from "../../../assets/home/javascript.svg";
import { ReactComponent as Html } from "../../../assets/home/html.svg";
import { ReactComponent as Scss } from "../../../assets/home/sass.svg";
import { ReactComponent as Css } from "../../../assets/home/css.svg";
import { gsap } from "gsap";

const ExperienceThird: React.FC = () => {
  useEffect(() => {
    const cloudTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    cloudTimeline.to(".naturehubLeaves", {
      x: -20,
      y: -5,
      stagger: 0.03,
      duration: 0.5,
    });
    return () => {
      cloudTimeline.kill();
    };
  }, []);
  return (
    <div className={`w-100 container pb-5 ${style.contentBox}`}>
      <div className="row">
        <h1 className={`${style.contentBox__title} mb-5 text-uppercase`}>
          My Work life
        </h1>
        <h3 className={`${style.contentBox__timeline} mb-3`}>
          Jun 2020 - Sep 2020 (4 Months)
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className={style.contentBox__placeBox}>
            <Naturehub />
          </div>
          <h5 className={`${style.contentBox__activity} text-uppercase mt-4`}>
            Frontend Web Developer
          </h5>
          <p>
            <i className={`${style.contentBox__activity} text-uppercase`}>
              NatureHub · Full-time (United States)
            </i>
          </p>
        </div>
        <div className="col-12 col-lg-8 mt-5">
          <div className="row overflow-hidden">
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Angular</p>
                <Angular width={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">TypeScript</p>
                <TypeScript width={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">Ionic</p>
                <Ionic width={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">SCSS</p>
                <Scss width={30} />
              </div>
            </div>

            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">JavaScript</p>
                <JavaScript width={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">HTML</p>
                <Html width={30} />
              </div>
            </div>
            <div className="col-6 col-sm-4 mb-4">
              <div
                className={`w-100 d-flex align-items-center ${style.contentBox__listBox}`}
              >
                <p className="mb-0 me-auto me-md-3">CSS</p>
                <Css width={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={`${style.contentBox__description}`}>
        I was working remotely as a front-end developer at Naturehub. A lovely
        company based in the USA. <br /> My Responsibilities
      </p>
      <ul className={`${style.contentBox__listBox}`}>
        <li>Writing web and mobile applications with Angular and Ionic</li>
        <li>
          Communicate with different members of the team, including backend
          developers, designers, and project manager
        </li>
        <li>Write maintainable and scalable code</li>
        <li>Follow Scrum Framework and Agile methodologies' best practices</li>
      </ul>
    </div>
  );
};

export default ExperienceThird;
