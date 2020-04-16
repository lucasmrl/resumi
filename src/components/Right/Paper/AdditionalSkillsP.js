import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function AdditionalSkillsP() {
  const { content } = useContext(ResumeContext);

  let bulletsData = content.additional.map((el) => {
    if (el === "") {
      return "";
    } else {
      return <li>{el}</li>;
    }
  });

  console.log(content);
  return (
    <div className={classes.professionalResume}>
      <div className="">
        <h3>
          <strong>Additional Skilss</strong>
        </h3>
        <ul>{bulletsData}</ul>
      </div>
    </div>
  );
}

export default AdditionalSkillsP;
