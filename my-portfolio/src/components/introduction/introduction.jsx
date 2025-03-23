import MyImage from "../../assets/myimage.webp";
import DownloadIcon from "../../assets/download.svg";

const Introduction = () => {
  return (
    <div className="h-[100vh] p-2 flex justify-center">
      <div className="grid grid-cols-2 h-[100%] w-[90%]">
        <div className="flex flex-col justify-center pl-4">
          <span className="text-2xl">Hello, I'm</span>
          <span className="text-7xl mb-3 mt-1">Aravinth Muruganantham</span>
          <span className="text-4xl">Frontend Web Developer</span>
          <button className="p-2 flex items-center text-xl w-[fit-content] mt-10 text-underline border-2 border-black-500 cursor-pointer rounded-md">
            <span className="mr-2">Download Resume</span>
            <img src={DownloadIcon} className="w-[20px] h-[20px]" />
          </button>
        </div>
        <div className="overflow-hidden">
          <div className="h-full w-full">
            <img src={MyImage} className="w-full h-full object-fit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
