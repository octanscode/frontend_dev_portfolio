import IBMLogo from "../../assets/ibm-logo.svg";
import UniversityLogo from "../../assets/university.svg";

const EducationAndWorkExperience = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 items-center">
          <div className="bg-black w-full h-[3px]" />
          <span className="col-span-2 text-8xl">MY EDUCATION</span>
        </div>
        <div className="grid grid-cols-3 items-center mt-8 mb-8">
          <div>-</div>
          <span className="text-8xl">AND WORK</span>
          <div>-</div>
        </div>
        <div className="grid grid-cols-3 items-center">
          <div>-</div>
          <span className="text-8xl">EXPERIENCE</span>
          <div className="bg-black w-full h-[3px]" />
        </div>
      </div>
      <div className="mt-20">
        <div className="flex justify-center">
          <div className="w-full flex">
            <div className="flex flex-col w-[49.5%] text-right items-end">
              <div className="align-right">
                <img
                  src={IBMLogo}
                  alt="IBM Logo"
                  className="h-[70px] w-[70px]"
                />
              </div>
              <span>Bengaluru, India</span>
              <span className="text-lg">{"Aug 2022 - Present"}</span>
            </div>
            <div className="w-[2px] h-[38vh] bg-black ml-6 mr-6 mt-6" />
            <div className="flex flex-col w-[30%] mt-4">
              <span className="text-xl font-bold">
                {"Full Stack Developer"}
              </span>
              <div>
                <ul>
                  <li className="mt-2">
                    Developed ScoreCard Manager web application for leadership
                    people to create, manage, approve targets, and roles.
                  </li>
                  <li className="mt-2 mb-2">
                    Single-handedly migrated four Tableau dashboards to
                    customized React visualization dashboards from scratch.
                  </li>
                  <li className="mb-2">
                    Re-architected two existing applications to increase
                    performance by 30% and reduced page load time by 50%.
                  </li>
                  <li>
                    Collaborated with UX/UI teams to deliver responsive,
                    user-friendly designs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full flex">
            <div className="w-[15%]">-</div>
            <div className="flex flex-col w-[36.8%] mt-4 text-right">
              <span className="text-xl font-bold">
                {"Application Developer Intern"}
              </span>
              <span>
                Automated a suite of workflows using Python, Pandas and Numpy,
                reducing manual data processing time by 60%, saving employees
                10+ hours weekly
              </span>
            </div>
            <div className="w-[2px] h-[25vh] bg-black ml-6 mr-6 mt-2" />
            <div className="flex flex-col w-[49.5%] text-left items-left">
              <div>
                <img
                  src={IBMLogo}
                  alt="IBM Logo"
                  className="h-[70px] w-[70px]"
                />
              </div>
              <span>Bengaluru, India</span>
              <span className="text-lg">{"Feb 2022 - Aug 2022"}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full flex">
            <div className="flex flex-col w-[49.5%] text-right items-end">
              <div className="align-right">
                <img
                  src={UniversityLogo}
                  alt="IBM Logo"
                  className="h-[70px] w-[70px]"
                />
              </div>
              <span className="text-xl mt-2">SASTRA DEEMED UNIVERSITY</span>
              <span>Thanjavur, India</span>
              <span className="text-lg">{"July 2018 - May 2022"}</span>
            </div>
            <div className="w-[2px] h-[30vh] bg-black ml-6 mr-6 mt-2" />
            <div className="flex flex-col w-[30%] mt-4">
              <span className="text-xl font-bold">
                {"B.Tech Computer Science and Engineering"}
              </span>
              <span>CGPA : 8.25</span>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndWorkExperience;
