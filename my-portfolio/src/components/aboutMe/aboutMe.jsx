import AboutMeImage from "../../assets/aboutMeImage.webp";

const AboutMe = () => {
  return (
    <div className="h-[90vh]">
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-2 bg-black w-full" />
        <span className="text-8xl">ABOUT ME</span>
      </div>
      <div className="flex justify-center h-[90%]">
        <div className="w-[90%] h-full grid grid-cols-2">
          <div className="h-full w-full overflow-hidden">
            <img
              src={AboutMeImage}
              alt="About_Me_Image"
              className="h-full w-full object-fit"
            />
          </div>
          <div>
            <div className="flex flex-col h-full justify-evenly p-8">
              <span className="text-xl">
                Hey there! I'm Aravinth, a passionate Frontend Web Developer who
                thrives on crafting sleek, high-performance web applications.
                With 3+ years of experience, I specialize in React.js, Next.js,
                and modern JavaScript, building intuitive and scalable user
                interfaces.
              </span>
              <span className="text-xl">
                I have a strong focus on UI/UX, ensuring that every website I
                build is not only visually appealing but also highly functional.
                I work with Material-UI, Tailwind CSS, and React Query to create
                responsive, fast, and seamless web experiences.
              </span>
              <span className="text-xl">
                I’m always exploring the latest frontend trends, optimizing
                performance, and writing clean, maintainable code. Whether it's
                building a dynamic dashboard, an interactive landing page, or a
                complex web app, I aim to deliver pixel-perfect results.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
