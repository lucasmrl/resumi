import React from "react";
import Header from "./Header";
import Professional from "./Professional";
import Education from "./Education";
import AdditionalSkills from "./AdditionalSkills";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import thumbnailA from "../../../assets/templateA.png";

function TemplateA() {
  return (
    <div className="">
      <h2>Template A</h2>
      <img
        src={thumbnailA}
        alt="template a thumbnail"
        className="thumb-template"
      />
      <p>The Basic</p>
      <Router>
        <div className="">
          <Button color="primary" component={Link} to="/header">
            Header
          </Button>
          <Button color="primary" component={Link} to="/professional">
            Professional Experience
          </Button>
          <Button color="primary" component={Link} to="/education">
            Education
          </Button>
          <Button color="primary" component={Link} to="/additional">
            Additional Skills
          </Button>
        </div>
        <div>
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
      </Router>
    </div>
  );
}

export default TemplateA;
