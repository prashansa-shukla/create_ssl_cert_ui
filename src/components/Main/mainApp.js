import React, { Component } from "react";
import { Box } from "@mui/system";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { withStyles } from "@mui/styles";
import { FormHelperText } from "@mui/material";

import SearchResultScreen from "../SearchResultScreen/SearchResultScreen";

export const MainAppStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    bgcolor: "background.paper",
    margin: "10px",
    alignItems: "center",
  },
  searchArea: {
    width: "80%",
  },
  helperText: {
    marginLeft: "10px",
  },
});

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isacNumber: "",
      searchedApps: null,
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  searchApps = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (this.state.isacNumber === "") {
      this.setState({ error: "ISAC Number can't be empty" });
      return null;
    } else {
      this.setState({ error: "" });
    }
    // API call.....using await

    //dummy result
    const searchedApps = {
      isacComponent: {
        isaciId: 1,
        appName: "Chat Bot",
        linkedApps: [
          {
            isaciId: 111,
            appName: "Test 1",
          },
          {
            isaciId: 222,
            appName: "Test 2",
          },
        ],
      },
    };

    this.setState({ searchedApps });
  };

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <div className={classes.searchArea}>
          <form onSubmit={this.searchApps}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
              <InputLabel sx={{ marginLeft: "10px" }} htmlFor="isacNumber">
                ISAC Number
              </InputLabel>
              <OutlinedInput
                variant="outlined"
                name="isacNumber"
                onChange={this.handleInputChange}
                label="ISAC Number"
                id="isac-number"
                defaultValue={this.state.isacNumber}
                size="medium"
                //required={true}
                type="String"
                fullWidth={true}
                error={this.state.error}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={this.searchApps}
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormHelperText error className={classes.helperText}>
              {this.state.error}
            </FormHelperText>
          </form>
        </div>

        {this.state.searchedApps &&
        this.state.searchedApps.isacComponent &&
        this.state.searchedApps.isacComponent.linkedApps?.length > 0 ? (
          <SearchResultScreen searchedApps={this.state.searchedApps} />
        ) : null}
      </Box>
    );
  }
}

export default withStyles(MainAppStyles)(MainApp);
