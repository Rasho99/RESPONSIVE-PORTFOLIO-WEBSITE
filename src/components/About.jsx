import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ekrem, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I have made and contributed to the development of many themes in
              the front-end area. I have developed using frameworks such as
              Bootstrap, Tailwind CSS. I have made header, footer, product
              content parts. I generally used HTML5 CSS SASS JAVASCRIPT while
              making these themes. Nowadays, I develop projects with reactjs at
              the same time. In the backend, I am doing projects with nodejs and
              mongo db.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
