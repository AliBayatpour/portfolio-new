import style from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/home/logo.svg";
import { ReactComponent as Navigation } from "../../assets/home/navigation.svg";
import resume from "../../assets/home/Ali-Bayatpour-resume.pdf";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Header: React.FC = () => {
  useEffect(() => {
    const logoLampTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    logoLampTimeline.to(".logoBlinking", {
      opacity: 0.2,
      duration: 1,
      ease: "sine.out",
    });
    const logoGearTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    logoGearTimeline.to(".logoFastRotate", {
      rotate: 360,
      ease: "elastic.out(1, 0.3)",
      duration: 3,
      transformOrigin: "center",
    });
    const logoScienceTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    logoScienceTimeline.to(".logoSlowRotate", {
      rotate: 1500,
      duration: 10,
      transformOrigin: "center",
    });
    const logoScaleTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    logoScaleTimeline.to(".logoScaleObject", {
      scale: 2,
      duration: 1,
      transformOrigin: "center",
    });
    return () => {
      logoLampTimeline.kill();
      logoGearTimeline.kill();
      logoScienceTimeline.kill();
      logoScaleTimeline.kill();
    };
  }, []);
  return (
    <React.Fragment>
      <header className={`${style.mainContainer} fixed-top w-100 px-lg-5`}>
        <div className={`${style.logoBox} py-3 px-4 d-flex`}>
          <Logo />

          <a
            className={`ms-auto ${style.dropdownButton} d-flex align-items-center`}
            download="Ali-Bayatpour-resume"
            href={resume}
          >
            <p className="mb-0">My Resume</p>
            <Navigation />
          </a>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
