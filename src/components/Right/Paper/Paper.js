import React from "react";
import HeaderP from "./HeaderP";
import ProfessionalP from "./ProfessionalP";
import EducationP from "./EducationP";
import AdditionalSkillsP from "./AdditionalSkillsP";

function Paper() {
  return (
    <div className="">
      <page size="A4" className="page">
        <HeaderP />
        <ProfessionalP />
        <EducationP />
        <AdditionalSkillsP />
      </page>
    </div>
  );
}

export default Paper;
