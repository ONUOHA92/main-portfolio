
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About 
          </p>
        </div>
        <p className="text-xl mt-20">
         I love written clean code using the dry principle method
          to make sure my application run fast. I want my line of Code to be
           less than 300 lines rather I  try as much as possible to break it into component using the feature of Reactjs.
        </p>

        <br />

        <p className="text-xl">
          I consider time complexity and space complexity when building an application.
          I am a frontend engineer that love good folder structure when it has to do with written code.
          The purpose of written clean and well organize code is to help other engineer understand the codebase.
          So I prefer written clean code and building scalable apps that is my goal.
          </p>
      </div>
    </div>
  );
};

export default About;
