import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function AdditionalSkillsP() {
  const { content } = useContext(ResumeContext);

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (content.additional.length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Additional Skills</strong>
      </h3>
    );
  }

  let bulletsData = content.additional.map((el) => {
    if (el === "") {
      return "";
    } else {
      return <li key={el}>{el}</li>;
    }
  });
  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <ul>{bulletsData}</ul>
      </div>
    </div>
  );
}

export default AdditionalSkillsP;
