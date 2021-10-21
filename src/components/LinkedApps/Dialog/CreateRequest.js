import React, { Fragment } from "react";
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CreateRequest = (props) => {
  const classes = useStyles();
  const { open, handleClose } = props;
  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      classes={{ paper: classes.dialogPaper }}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Sound
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      {props.abc ? (
        <Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "#4BB543",
            border: "solid 1px black",
            borderRadius: "20px",
          }}
        >
          <CheckCircleIcon /> Request Submitted Succesfully!! If you wish to
          proceed further click <a href="#">here</a>
        </Box>
      ) : (
        <h1> not yet true</h1>
      )}
    </Dialog>
  );
};

export default CreateRequest;
