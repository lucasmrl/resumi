import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function HeaderP() {
  const { content } = useContext(ResumeContext);

  return (
    <div>
      <div className={classes.headerResume}>
        <div className={classes.contentHeader}>
          <h1>{content.header.name}</h1>
          <p>
            {content.header.address}
            <br />
            {content.header.city} {content.header.state} {content.header.zip}
            <br />
            {content.header.phone}
            <br />
            {content.header.email}
          </p>
          <br />
          <p>{content.header.summary}</p>
          <hr className={classes.dividerRight} />
        </div>
      </div>
    </div>
  );
}

export default HeaderP;
