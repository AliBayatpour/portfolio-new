import style from "./experience-five.module.scss";
import { ReactComponent as FullStack } from "../../../assets/home/full-stack.svg";
import { ReactComponent as TeamLead } from "../../../assets/home/team-lead.svg";

const ExperienceFive: React.FC = () => {
  return (
    <div className={`w-100 container pb-5 ${style.contentBox}`}>
      <div className="row">
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h5 className={`${style.contentBox__activity} text-uppercase mt-4`}>
            Full-stack Web Developer(5 months)
          </h5>
          <p>
            <i className={`${style.contentBox__activity} text-uppercase`}>
              Single.Earth · Full-time (Estonia)
            </i>
          </p>
          <p className={`${style.contentBox__description}`}>
            It was my goal as my next step to become a full-stack developer, and
            I enjoyed it a lot.
          </p>
          <ul className={`${style.contentBox__listBox}`}>
            <li>
              Building the Fron-end web apps with Angular(also Angular Universal
              for SSR)
            </li>
            <li>
              I built the backend part of the projects, including
              Authentication, Authorization, User profiles, and many more
              aspects of the backend by using Golang, Nodejs.
            </li>
            <li>
              Writing maintainable and scalable code was crucial at this point
              since the company was growing very fast, and I desired to prepare
              a good code base for the new developers.
            </li>
            <li>
              Being a team player and at this point, it was more important than
              before since the dev team was growing fast.
            </li>
            <li>
              Onboarding new developers and building the culture of the dev team
              with the help of other managers
            </li>
            <li>
              I needed to be a role model for other developers by working hard,
              taking ownership of my work, and being responsible as much as
              possible to spread this work ethic, among others.
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <FullStack />
          </div>
        </div>
      </div>

      <div className={`${style.secRowContentBox} row`}>
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h5 className={`${style.contentBox__activity} text-uppercase mt-4`}>
            Software Development Team Lead(Dec 2021 - Present)
          </h5>
          <p>
            <i className={`${style.contentBox__activity} text-uppercase`}>
              Single.Earth · Full-time (Estonia)
            </i>
          </p>
          <p className={`${style.contentBox__description}`}>
            This position changed me as a developer and a leader
          </p>
          <ul className={`${style.contentBox__listBox}`}>
            <li>
              Working with Angular on the Front-end and Golang on the back-end.
            </li>
            <li>
              Dockerizing the projects and building CI/CDs for every project
            </li>
            <li>Being a leader and a role model for my team</li>
            <li>
              Helping team members both in technical and non-technical matters
            </li>
            <li>Hiring Developers and doing interviews with candidates</li>
          </ul>
        </div>
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <TeamLead />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceFive;
