import React, { Component } from "react";
import { Box } from "@mui/system";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { withStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";

import SearchResultScreen from "../SearchResultScreen/SearchResultScreen";

export const MainAppStyles = (theme) => ({
  box: {
    isplay: "flex",
    p: 1,
    bgcolor: "background.paper",
    width: "80%",
    margin: "10px",
    justifyContent: "center",
  },
});

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isacNumber: "",
      searchedApps: null,
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

  searchApps = async () => {
    // API call.....using await

    //dummy result
    const searchedApps = {
      id: 1,
      appName: "Chat Bot",
      linkedApps: [
        {
          id: 111,
          name: "Test 1",
        },
        {
          id: 222,
          name: "Test 2",
        },
      ],
    };

    this.setState({ searchedApps });
  };

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.box}>
        <FormControl
          sx={{ m: 1, width: "80%", paddingLeft: "-15px" }}
          variant="standard"
        >
          <InputLabel htmlFor="isacNumber">ISAC Number</InputLabel>
          <OutlinedInput
            variant="outlined"
            name="isacNumber"
            onChange={this.handleInputChange}
            label="ISAC Number"
            id="isac-number"
            defaultValue={this.state.isacNumber}
            size="medium"
            required={true}
            type="String"
            fullWidth={true}
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

        {this.state.searchedApps &&
        this.state.searchedApps.linkedApps?.length > 0 ? (
          <SearchResultScreen searchedApps={this.state.searchedApps} />
        ) : null}
      </Box>
    );
  }
}

export default withStyles(MainAppStyles)(MainApp);
