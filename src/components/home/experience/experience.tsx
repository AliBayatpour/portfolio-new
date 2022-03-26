import style from "./experience.module.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceFirst from "../experience-first/experience-first";
import ExperienceSecond from "../experience-second/experience-second";
import ExperienceThird from "../experience-third/experience-third";
import ExperienceFourth from "../experience-fourth/experience-fourth";
import ExperienceFive from "../experience-five/experience-five";

const Experience: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": () => {
        gsap.utils.toArray(".panel").forEach((panel: any, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false,
          });
        });
      },
    });

    return () => {
      // kill all ScrollTrigger[s]
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <div className={`w-100 ${style.panelBox}`}>
      <section
        className={`panel overflow-hidden ${style.panelBox__panel} ${style["panelBox__panel--dark"]}`}
      >
        <ExperienceFirst />
      </section>
      <section
        className={`panel overflow-hidden ${style.panelBox__panel} ${style["panelBox__panel--dark"]}`}
      >
        <ExperienceSecond />
      </section>
      <section
        className={`panel overflow-hidden ${style.panelBox__panel} ${style["panelBox__panel--dark"]}`}
      >
        <ExperienceThird />
      </section>
      <section
        className={`panel overflow-hidden ${style.panelBox__panel} ${style["panelBox__panel--dark"]}`}
      >
        <ExperienceFourth />
      </section>
      <section
        className={`panel overflow-hidden ${style.panelBox__panel} ${style["panelBox__panel--dark"]}`}
      >
        <ExperienceFive />
      </section>
    </div>
  );
};
export default Experience;
