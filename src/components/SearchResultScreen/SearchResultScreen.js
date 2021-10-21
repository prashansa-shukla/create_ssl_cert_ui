import React from "react";
import { Box } from "@mui/system";
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import BeenhereIcon from "@mui/icons-material/Beenhere";

import LinkedApps from "../LinkedApps/LinkedApps";

export const styles = (theme) => ({
  root: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  searchedApp: {
    width: "80%",
  },
  searchedAppCard: {
    flex: 1,
    border: "none",
    borderRadius: "2%",
    width: "40%",
    height: "100px",
    transition: theme.transitions?.create(["border", "border-color"], {
      duration: theme.transitions?.duration.complex,
    }),
    "&:hover": {
      border: "1px solid rgb(20,92,191)",
      cursor: "pointer",
    },
    marginBottom: "15px",
  },
  searchedAppTitle: {
    fontSize: "18px",
    fontWeight: 400,
  },
});

const SearchResult = (props) => {
  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Card className={classes.searchedAppCard}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              <BeenhereIcon />
            </Avatar>
          }
          classes={{
            title: classes.searchedAppTitle,
          }}
          title={props.searchedApps.isacComponent.appName}
          subheader={"ISAC ID: " + props.searchedApps.isacComponent.isaciId}
        />
      </Card>

      <Typography
        variant="h6"
        color="text.secondary"
        style={{ alignSelf: "flex-start", marginLeft: "10%" }}
      >
        Linked Apps
      </Typography>
      <hr
        style={{ marginTop: "10px", border: "solid 1px black", width: "80%" }}
      />

      {props.searchedApps.isacComponent.linkedApps.map((item, index) => (
        <LinkedApps
          key={"linkedApp_" + index}
          data={item}
          searchResult={props.searchedApps.isacComponent}
        />
      ))}
    </Box>
  );
};

export default withStyles(styles)(SearchResult);
