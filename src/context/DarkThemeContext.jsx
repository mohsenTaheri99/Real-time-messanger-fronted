import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const themeUpdateContext = React.createContext();
// export function useThemeUpdate() {
//   return useContext(themeUpdateContext);
// }
const themeD = {
  color: "red",
};
function DarkThemeContext({ children }) {
  return (
    <ThemeProvider theme={invertTheme}>
      <div>{children}</div>
    </ThemeProvider>
  );
}

export default DarkThemeContext;
