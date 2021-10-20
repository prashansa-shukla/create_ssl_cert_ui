import * as React from "react";
import Box from "@mui/material/Box";

import AppBar from "../AppBar/appBar";
import Main from "../Main/mainApp";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar />
      <Main />
    </Box>
  );
}
