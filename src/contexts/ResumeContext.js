import React, { createContext, useState } from "react";
import fakeData from "../utils/fake_data";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  const [content, setContent] = useState({
    header: {},
    professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
    education: {},
    additional: [],
  });

  const [contentFake, setContentFake] = useState();

  const [control, setControl] = useState(false);

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

  function addFakeData() {
    setControl(true);
    setContentFake(fakeData);
  }

  function removeFakeData() {
    setControl(false);
    setContentFake({
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    });
  }

  return (
    <ResumeContext.Provider
      value={{
        content,
        control,
        contentFake,
        updateHeaderData,
        updateProfessionalData,
        updateEducationData,
        updateAdditionalData,
        addFakeData,
        removeFakeData,
      }}
    >
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
