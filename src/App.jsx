import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ChatLayout from "./pages/ChatLayout";
import { ThemeProvider } from "styled-components";
import ColorCollection from "./styles/colorCollection";
import { AppC } from "./styles/App.style";
import Login from "./pages/Login";
import Register from "./pages/Register";
export const themeUpdateContext = React.createContext();
export const themeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(ColorCollection("dark"));
  const [darkMod, setDarkMod] = useState("dark");
  useEffect(() => {
    setTheme(ColorCollection(darkMod));
    console.log(darkMod);
  }, [darkMod]);
  return (
    <ThemeProvider theme={theme}>
      <themeUpdateContext.Provider value={setDarkMod}>
        <themeContext.Provider value={darkMod}>
          <AppC>
            <Routes>
              <Route path="/" element={<ChatLayout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<h1>Page not find</h1>} />
            </Routes>
          </AppC>
        </themeContext.Provider>
      </themeUpdateContext.Provider>
    </ThemeProvider>
  );
}
export default App;
