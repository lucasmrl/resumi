import React from "react";
import classes from "./Template.module.css";

function HeaderP() {
  return (
    <div>
      <div className={classes.headerResume}>
        <div className={classes.contentHeader}>
          <h1>Lucas Melo R. de Lima</h1>
          <p>
            827 S Washington St, #113
            <br />
            Salt Lake City, UT, 84111
            <br />
            (801) 111 1111
            <br />
            email@email.com
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            ad velit magni quisquam at eius? Eius, nam architecto rerum expedita
            eveniet aliquam delectus incidunt.
          </p>
          <hr className={classes.dividerRight} />
        </div>
      </div>
    </div>
  );
}

export default HeaderP;
