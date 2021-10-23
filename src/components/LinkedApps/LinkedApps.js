import React, { Fragment } from "react";
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CreateRequest from "./Dialog/CreateRequest";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";

import LinkIcon from "@mui/icons-material/Link";

export const styles = () => ({
  linkedAppCard: {
    border: "none",
    borderRadius: "2%",
    width: "80%",
    margin: "10px",
  },
});

const LinkedApps = (props) => {
  const { classes, data, searchResult } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (data) => {
    console.log("data is...", data);
    handleClickOpen();
  };

  return (
    <Fragment>
      <Card className={classes.linkedAppCard}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              <LinkIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleClick(data)}>
              <CardMembershipIcon />
            </IconButton>
          }
          title={data.appName}
          subheader={"ISAC ID: " + data.isacId}
        />
      </Card>
      {open ? <CreateRequest open={open} handleClose={handleClose} /> : null}
    </Fragment>
  );
};

export default withStyles(styles)(LinkedApps);
