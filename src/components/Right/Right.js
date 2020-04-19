import React from "react";
import Paper from "./Paper/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Clear";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    "& > *": {
      margin: 0,
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    margin: 10,
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
    margin: 10,
  },
}));

function Right() {
  const classes = useStyles();
  return (
    <div className="right">
      <div className={classes.root}>
        <Tooltip title="Delete All Data" placement="right">
          <Avatar className={classes.pink}>
            <ClearIcon />
          </Avatar>
        </Tooltip>
        <Tooltip title="Save to PDF" placement="right">
          <Avatar className={classes.green}>
            <PictureAsPdfIcon />
          </Avatar>
        </Tooltip>
      </div>
      <Paper />
    </div>
  );
}

export default Right;
