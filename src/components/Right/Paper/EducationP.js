import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function EducationP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    );
  }

  let bulletEducation;
  if (!contentUse.education.additional) {
    bulletEducation = "";
  } else {
    bulletEducation = (
      <ul>
        <li>{contentUse.education.additional}</li>
      </ul>
    );
  }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.education.institution} </strong>{" "}
          {contentUse.education.city}
        </p>
        <p>
          {contentUse.education.major} {contentUse.education.gradYear}
        </p>
        {bulletEducation}
      </div>
    </div>
  );
}

export default EducationP;
