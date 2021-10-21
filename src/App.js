import AppRoutes from "./routers/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
