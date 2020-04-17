import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ProfessionalP() {
  const { content } = useContext(ResumeContext);

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (Object.keys(content.professional).length < 3) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Professional Experience</strong>
      </h3>
    );
  }

  let bulletProfessional1 = content.professional.desc1.map((el) => {
    if (el === "") {
      return "";
    } else {
      return <li key={el}>{el}</li>;
    }
  });

  let bulletProfessional2 = content.professional.desc2.map((el) => {
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
        <p>
          <strong>{content.professional.company1}</strong>{" "}
          {content.professional.local1}
        </p>
        <p>
          {content.professional.position1} {content.professional.start1}{" "}
          {content.professional.end1}
        </p>
        <ul>{bulletProfessional1}</ul>
        <p>
          <strong>{content.professional.company2}</strong>{" "}
          {content.professional.local2}
        </p>
        <p>
          {content.professional.position2} {content.professional.start2}{" "}
          {content.professional.end2}
        </p>
        <ul>{bulletProfessional2}</ul>
      </div>
    </div>
  );
}

export default ProfessionalP;
