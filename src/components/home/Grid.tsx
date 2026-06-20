import React from "react";

import BlogsBlock from "./grid/BlogsBlock";
import ContactBlock from "./grid/ContactBlock";
import CredentialsBlock from "./grid/CredentialsBlock";
import MernStackBlock from "./grid/MernStackBlock";
import ProfileBlock from "./grid/ProfileBlock";
import ProjectsBlock from "./grid/ProjectsBlock";
import ServicesBlock from "./grid/ServicesBlock";
import SocialProfilesBlock from "./grid/SocialProfilesBlock";
import TechMarqueeBlock from "./grid/TechMarqueeBlock";

const Grid = () => {
  return (
    <div className=" px-6 lg:px-10 max-w-[1200px] mx-auto mt-20 ">
      <div className="lg:flex gap-6 ">
        <ProfileBlock />

        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex flex-col gap-6">
          <TechMarqueeBlock />

          <div className="flex flex-col sm:flex-row gap-6">
            <CredentialsBlock />
            <ProjectsBlock />
          </div>
        </div>
      </div>

      <div className="lg:flex  my-8 gap-6">
        <BlogsBlock />
        <MernStackBlock />
        <SocialProfilesBlock />
      </div>

      <div className="sm:flex gap-6">
        <ServicesBlock />
        <ContactBlock />
      </div>
    </div>
  );
};

export default Grid;
