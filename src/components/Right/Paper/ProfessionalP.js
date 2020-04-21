import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ProfessionalP() {
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
  if (Object.keys(contentUse.professional).length < 3) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Professional Experience</strong>
      </h3>
    );
  }

  let bulletProfessional1 = contentUse.professional.desc1.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletProfessional2 = contentUse.professional.desc2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.professional.company1}</strong>{" "}
          {contentUse.professional.local1}
        </p>
        <p>
          {contentUse.professional.position1} {contentUse.professional.start1}{" "}
          {contentUse.professional.end1}
        </p>
        <ul>{bulletProfessional1}</ul>
        <p>
          <strong>{contentUse.professional.company2}</strong>{" "}
          {contentUse.professional.local2}
        </p>
        <p>
          {contentUse.professional.position2} {contentUse.professional.start2}{" "}
          {contentUse.professional.end2}
        </p>
        <ul>{bulletProfessional2}</ul>
      </div>
    </div>
  );
}

export default ProfessionalP;
