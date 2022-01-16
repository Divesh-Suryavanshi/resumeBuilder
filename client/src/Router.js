// import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components/common";
import {Welcome, CreateResume} from "./pages";

const Router = () => {
  return (
      <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/edit/resume" element={<CreateResume />} />
        </Routes>
        </div>
      <Footer />
      </BrowserRouter>
  );
};

export default Router;
