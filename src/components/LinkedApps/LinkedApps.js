import React, { Fragment } from "react";
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CreateRequest from "./Dialog/CreateRequest";
export const styles = (theme) => ({});

const LinkedApps = (props) => {
  const { classes, data } = props;

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
      <Card className={classes.row} style={{ marginBottom: "15px" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => handleClick(data)}>
              <CardMembershipIcon />
            </IconButton>
          }
          title={data.name}
          subheader=""
        />
      </Card>
      {open ? <CreateRequest open={open} handleClose={handleClose} /> : null}
    </Fragment>
  );
};

export default withStyles(styles)(LinkedApps);
