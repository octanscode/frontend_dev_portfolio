import "./App.css";
import AboutMe from "./components/aboutMe/aboutMe";
import EducationAndWorkExperience from "./components/educationAndWorkExperience/educationAndWorkExperience";
import Introduction from "./components/introduction/introduction";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div>
      <div>
        <Introduction />
        <div className="mt-20 mb-20" />
        <AboutMe />
        <div className="mt-30 mb-30" />
        <EducationAndWorkExperience />
        <div className="mt-30 mb-30" />
        <Skills />
        <div className="mt-30 mb-30" />
      </div>
    </div>
  );
}

export default App;
