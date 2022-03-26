import style from "./hero.module.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ReactComponent as Map } from "../../../assets/home/map.svg";

const Hero: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(".contentBox__title", {
      duration: 2,
      text: "hi my name is ali and I'm a software engineer",
    });
    gsap.to(".contentBox__subTtitle", {
      duration: 2,
      delay: 2,
      text: "Living In Tallinn, Beautiful Capital of Estonia",
    });
    gsap.fromTo(".mapSVG", { scale: 0 }, { scale: 1 });
    const pin = gsap.timeline({ repeat: -1, yoyo: true });
    pin.fromTo(
      ".pinMap",
      {
        y: -20,
      },
      {
        y: 0,
        ease: "bounce.out",
        duration: 2,
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div className={`w-100 ${style.mainContainer} py-5`}>
      <div
        className={`${style.contentBox} container-lg d-flex flex-wrap flex-md-nowrap h-100 py-5`}
      >
        <div className={`my-md-auto mt-5 w-100`}>
          <h1
            className={`${style.contentBox__title} text-capitalize contentBox__title mb-5`}
          ></h1>
          <h4
            className={`${style.contentBox__subTtitle} contentBox__subTtitle`}
          ></h4>
        </div>
        <div className={`${style.mapContainer} w-100 my-md-auto`}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Hero;
