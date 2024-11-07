import React from "react";
import ServiceItem from "../sub/ServiceItem";

const Service = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Services
      </h1>
      <div className="h-full flex flex-col gap-10 px-10 justify-center z-[20] w-[90%]">
        <ServiceItem />
      </div>
    </div>
  );
};

export default Service;
