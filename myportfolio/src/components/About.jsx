import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
            Having a UX backgroung makes me a creative developer. I have developed many websites
            using HTML, CSS, JavaScript, React & Tailwind which makes me a proficient frontend developer.
            To hightlight my backend skills I have developed couple of RESTful APIs(dotnet & nodejs).
            Since most of the companies are moving to cloud hence I have started to learn one of the most
            popular cloud platform which is Microsift Azure(AZ-900 & DP-900 certificate holder).
        </p>

        <br />

        <p className="text-xl">
          I always strive to write a clean & readable code.
          Learning never stops for any developer, hence my next topic of interest is DevOps.
          Yes!!you read it right, I'm self learning DevOps concepts and soon will complete
          Azure Devops Certification.
        </p>
      </div>
    </div>
  );
};

export default About;
