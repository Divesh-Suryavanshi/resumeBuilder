// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";
import "./App.css";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";
import {Welcome, CreateResume} from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/edit/resume" element={<CreateResume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
