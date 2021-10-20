import React, { Fragment } from "react";
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

import LinkedApps from "../LinkedApps/LinkedApps";

export const styles = (theme) => ({});

const SearchResult = (props) => {
  const { classes } = props;

  return (
    <Fragment>
      <Card className={classes.row} style={{ marginBottom: "15px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              Smart Ex
            </Avatar>
          }
          title={props.searchedApps.appName}
          subheader=""
        />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.searchedApps.linkedApps.map((item, index) => (
              <LinkedApps key={"linkedApp_" + index} data={item} />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default withStyles(styles)(SearchResult);
