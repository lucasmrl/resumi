import React, { createContext, useState } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  const [content, setContent] = useState({
    header: {},
    professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
    education: {},
    additional: [],
  });

  function updateHeaderData(data) {
    setContent({ ...content, header: data });
  }

  function updateProfessionalData(data) {
    setContent({ ...content, professional: data });
  }

  function updateEducationData(data) {
    setContent({ ...content, education: data });
  }

  function updateAdditionalData(data) {
    setContent({ ...content, additional: Object.values(data) }); //Converting the object to an Array in order to iterate in AdditionalSkillsP.js
  }

  function updateFakeData(data) {
    setContent({ ...content, ...data });
  }

  return (
    <ResumeContext.Provider
      value={{
        content,
        updateHeaderData,
        updateProfessionalData,
        updateEducationData,
        updateAdditionalData,
        updateFakeData,
      }}
    >
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
