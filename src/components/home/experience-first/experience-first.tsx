import React, { useEffect } from "react";
import style from "./experience-first.module.scss";
import { ReactComponent as University } from "../../../assets/home/university.svg";
import { ReactComponent as Graduation } from "../../../assets/home/graduation.svg";
import { gsap } from "gsap";

const ExperienceFirst: React.FC = () => {
  useEffect(() => {
    const cloudTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    cloudTimeline.to(".cloudsSvg", { x: 10, stagger: 0.1, duration: 2 });
    return () => {
      cloudTimeline.kill();
    };
  }, []);
  return (
    <div className={`w-100 container pb-5 ${style.contentBox}`}>
      <h1 className={`${style.contentBox__title} mb-5 text-uppercase`}>
        My Student Life
      </h1>
      <h3 className={`${style.contentBox__timeline}`}>2014-2019</h3>
      <div className={style.contentBox__placeBox}>
        <University />
      </div>
      <h5 className={`${style.contentBox__activity} text-uppercase mt-4`}>
        Bachelor in Computer Science
      </h5>
      <p className={`${style.contentBox__description}`}>
        I enjoyed the theory part besides the practical part. I became the
        professor's assistant and started teaching students Data Structures
        which was the most amazing thing that happened to me during my bachelor
        study.
        <br />
        Some of my favorite topics were:
      </p>
      <ul className={`${style.contentBox__listBox}`}>
        <li>
          Databases, including relational(SQL) and non-relational(MongoDB)
          databases, both theoretical and practical part
        </li>
        <li>Engineering Mathematics</li>
        <li>Data Structures</li>
        <li>C language</li>
        <li>Discrete Mathematics</li>
        <li>Algorithms</li>
      </ul>
      <div
        className={`${style.contentBox__finalThoughts} d-flex align-items-center`}
      >
        <Graduation />
        <p className={`${style.contentBox__description} mb-0 ms-3`}>
          After graduation, I decided to pursue a career as a web developer and
          went to Estonia.
        </p>
      </div>
    </div>
  );
};

export default ExperienceFirst;
