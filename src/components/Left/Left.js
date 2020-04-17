import React, { useContext } from "react";
import Header from "./Header";
import Professional from "./Professional";
import Education from "./Education";
import AdditionalSkills from "./AdditionalSkills";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import logo from "../../assets/logo.png";
import { ResumeContext } from "../../contexts/ResumeContext";
import fakeData from "../../utils/fake_data";

function Left() {
  const { content, updateFakeData } = useContext(ResumeContext);

  function handleFakeData(e) {
    e.preventDefault();
    updateFakeData(fakeData);
  }

  return (
    <div className="left">
      <div className={classes.headerLeft}>
        <img src={logo} alt="logo" />
        <Button
          color="secondary"
          onClick={handleFakeData}
          style={{ marginTop: 15, marginRight: 20, height: "auto" }}
        >
          example
        </Button>
      </div>

      <div className="">
        <Router>
          <div className={classes.topLeft}>
            <Button color="primary" component={Link} to="/header">
              Header
            </Button>
            <Button color="primary" component={Link} to="/professional">
              Experience
            </Button>
            <Button color="primary" component={Link} to="/education">
              Education
            </Button>
            <Button color="primary" component={Link} to="/additional">
              Skills
            </Button>
          </div>
          <div>
            <hr className={classes.hr} />
            <div className={classes.formsSection}>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/header">
                  <Header />
                </Route>
                <Route path="/professional">
                  <Professional />
                </Route>
                <Route path="/education">
                  <Education />
                </Route>
                <Route path="/additional">
                  <AdditionalSkills />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Left;
