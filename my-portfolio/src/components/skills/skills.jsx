import React from "react";
import SkillModel from "./skillModel";

const Skills = () => {
  return (
    <div className="pl-1 pr-3">
      <div className="grid grid-cols-4">
        <div>
          <div
            className="text-center text-9xl mb-14 font-bold"
            style={{
              opacity: 0.5,
              color: "transparent",
              WebkitTextStroke: "2px black",
            }}
          >
            My
          </div>
          <div
            className="text-center text-9xl mb-14 font-bold"
            style={{
              opacity: 0.5,
              color: "transparent",
              WebkitTextStroke: "2px black",
              wordBreak: "break-word",
            }}
          >
            Skills
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 space-x-10 space-y-10">
          <SkillModel name={"HTML5"} value={90} key={"HTML5"} />
          <SkillModel name={"CSS3"} value={95} key={"CSS3"} />
          <SkillModel
            name={"Javascript (ES6+)"}
            value={90}
            key={"Javascript"}
          />
          <SkillModel name={"Typescript"} value={80} key={"Typescript"} />
          <SkillModel name={"React.js"} value={92} key={"React.js"} />
          <SkillModel name={"Next.js"} value={95} key={"Next.js"} />
          <SkillModel name={"Flux"} value={90} key={"Flux"} />
          <SkillModel name={"Redux"} value={97} key={"Redux"} />
          <SkillModel name={"Node.js"} value={85} key={"Node.js"} />
          <SkillModel name={"Tailwind CSS"} value={90} key={"Tailwind CSS"} />
          <SkillModel name={"Webpack"} value={92} key={"Webpack"} />
          <SkillModel name={"Vite"} value={95} key={"Vite"} />
          <SkillModel name={"Git"} value={93} key={"Git"} />
          <SkillModel name={"Github"} value={90} key={"Github"} />
          <SkillModel name={"REST API"} value={90} key={"REST API"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
