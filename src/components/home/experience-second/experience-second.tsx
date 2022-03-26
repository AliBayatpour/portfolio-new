import React, { useEffect } from "react";
import style from "./experience-second.module.scss";
import { ReactComponent as University } from "../../../assets/home/master.svg";
import { ReactComponent as Graduation } from "../../../assets/home/graduation.svg";
import { gsap } from "gsap";

const ExperienceSecond: React.FC = () => {
  useEffect(() => {
    const cloudTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    cloudTimeline.to(".masterCloud", { x: 10, stagger: 0.1, duration: 2 });
    const treesTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0,
    });
    cloudTimeline
      .to(".masterTree", {
        rotation: 10,
        transformOrigin: "center",
        ease: "elastic.out(1, 0.3)",
        duration: 1,
      })
      .to(".masterTree", {
        rotation: -10,
        transformOrigin: "center",
        ease: "elastic.out(1, 0.3)",
        duration: 1,
      });
    return () => {
      cloudTimeline.kill();
      treesTimeline.kill();
    };
  }, []);
  return (
    <div className={`w-100 container pb-5 ${style.contentBox}`}>
      <h1 className={`${style.contentBox__title} mb-5 text-uppercase`}>
        My Student Life
      </h1>
      <h3 className={`${style.contentBox__timeline}`}>2019-2022</h3>
      <div className={style.contentBox__placeBox}>
        <University />
      </div>
      <h5 className={`${style.contentBox__activity} text-uppercase mt-4`}>
        MASTER OF BUSINESS ADMINISTRATION(MBA)
      </h5>
      <p>
        <i className={`${style.contentBox__activity} text-uppercase`}>
          (focus on software project managemnet)
        </i>
      </p>
      <p className={`${style.contentBox__description}`}>
        During my two and half years of master studying, I dedicated a lot of
        time on:
      </p>
      <ul className={`${style.contentBox__listBox}`}>
        <li>Teamwork</li>
        <li>Management</li>
        <li>Agile Methodologies, specifically Scrum</li>
        <li>
          Took Master of Computer Engineering courses, including JavaScript and
          web development and pass the courses with the grade 5 from 5.
        </li>
        <li>Negotiation</li>
      </ul>
      <div
        className={`${style.contentBox__finalThoughts} d-flex align-items-center`}
      >
        <Graduation />
        <p className={`${style.contentBox__description} mb-0 ms-3`}>
          Finally I wrote my thesis with the topic of "Usefulness of the Scrum,
          A Study Among Startups"
        </p>
      </div>
    </div>
  );
};

export default ExperienceSecond;
