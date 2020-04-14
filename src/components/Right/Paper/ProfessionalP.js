import React from "react";
import classes from "./Template.module.css";

function ProfessionalP() {
  return (
    <div className={classes.professionalResume}>
      <div className="">
        <h3>
          <strong>Professional Experience</strong>
        </h3>
        <p>
          <strong>Groupon,</strong> Salt Lake City
        </p>
        <p>Account Manager, September 2012 - Present</p>
        <ul>
          <li>Working with several departaments to do nothing.</li>
          <li>Created excel spreadsheets to learn how to type.</li>
          <li>Implemented some crazy stuff about the universe.</li>
        </ul>
        <p>
          <strong>Movida Rent a Car,</strong> Salt Lake City
        </p>
        <p>Sales Manager, May 2010 - September 2012</p>
        <ul>
          <li>Working with several departaments to do nothing.</li>
          <li>Created excel spreadsheets to learn how to type.</li>
          <li>Implemented some crazy stuff about the universe.</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfessionalP;
