import React from "react";
import classes from "./Template.module.css";

function EducationP() {
  return (
    <div className={classes.professionalResume}>
      <div className="">
        <h3>
          <strong>Education</strong>
        </h3>
        <p>
          <strong>LDS Business College,</strong> Salt Lake City
        </p>
        <p>
          <i>Bachelor in Software Development</i>, 2021
        </p>
        <ul>
          <li>Honors cum laude (GPA: 4.0)</li>
        </ul>
      </div>
    </div>
  );
}

export default EducationP;
