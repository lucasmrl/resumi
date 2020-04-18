import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function HeaderP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }
  return (
    <div>
      <div className={classes.headerResume}>
        <div className={classes.contentHeader}>
          <h1 className={classes.h1Name}>{contentUse.header.name}</h1>
          <p>
            {contentUse.header.address}
            <br />
            {contentUse.header.city} {contentUse.header.state}
            {"  "}
            {contentUse.header.zip}
            <br />
            {contentUse.header.phone}
            <br />
            {contentUse.header.email}
          </p>
          <br />
          <p>{contentUse.header.summary}</p>
          <hr className={classes.dividerRight} />
        </div>
      </div>
    </div>
  );
}

export default HeaderP;
