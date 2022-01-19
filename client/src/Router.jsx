import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./pages/common";
import { Welcome, CreateResume, ErrorPage } from "./pages";

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route
                        exact
                        path="/edit/resume"
                        element={<CreateResume />}
                    />
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
