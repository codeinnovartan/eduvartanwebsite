import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import "@fontsource/metropolis";
import "@fontsource/metropolis/500.css";

function App() {
  const colorPalette = {
    primaryBlue: "#0743A3",
    primaryOrange: "#F36421",
    secondaryGreen: "#74AE42",
    secondaryBlue: "#073278",
    textBlack: "#000000",
    textDarkGrey: "#494949",
    textLightGrey: "#cccccc",
    textWhite: "#ffffff",
    backgroundGreen: "#F1F7EC",
    backgroundOrange: "#FEF0E9",
    backgroundBlue: "#E7EDF6",
    backgroundGrey: "#F6F6F6",
  };

  const setCSSVariables = (palette) => {
    const root = document.documentElement;
    Object.keys(palette).forEach((key) => {
      root.style.setProperty(`--${key}`, palette[key]);
    });
  };

  setCSSVariables(colorPalette);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
