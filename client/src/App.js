// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Welcome } from "./core/Welcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/edit/" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
