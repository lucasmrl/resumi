import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function EducationP() {
  const { content } = useContext(ResumeContext);

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (Object.keys(content.education).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    );
  }

  let bulletEducation;
  if (!content.education.additional) {
    bulletEducation = "";
  } else {
    bulletEducation = (
      <ul>
        <li>{content.education.additional}</li>
      </ul>
    );
  }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{content.education.institution} </strong>{" "}
          {content.education.city}
        </p>
        <p>
          {content.education.major} {content.education.gradYear}
        </p>
        {bulletEducation}
      </div>
    </div>
  );
}

export default EducationP;
