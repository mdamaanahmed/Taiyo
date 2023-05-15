import React from "react";
import { CovidCasesGraph, CovidCasesMap } from "../components";

const Cases = () => {
  return (
    <>
      <CovidCasesGraph />
      <div className="mt-20">
        <h1 className="text-center text-[12px] text-gray-600 font-bold my-3">
          World Wide Covid Cases Information
        </h1>
        <CovidCasesMap />
      </div>
    </>
  );
};

export default Cases;
