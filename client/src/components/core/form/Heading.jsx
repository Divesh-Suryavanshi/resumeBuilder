// import { useContext } from "react";
// import ResumeContext from "../context/ResumeContext";

import { Row, H2 } from "./common/";

// import resumeData from "../context/resumeData";

export const Heading = ({ step, values, handleChange }) => {
    if (step !== 0) {
        return null;
    }

    return (
        <>
            <H2>How should your recruiter call you?</H2>
            <Row
                id="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
            />
            <Row
                id="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
            />
            <Row
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
            />
            <Row
                id="phone"
                label="Phone No."
                type="number"
                value={values.phone}
                onChange={handleChange}
            />
            <Row
                id="address"
                label="Address"
                sz="12"
                value={values.address}
                onChange={handleChange}
            />
            <Row
                id="city"
                label="City"
                value={values.city}
                onChange={handleChange}
            />
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                    State
                </label>
                <select id="inputState" className="form-select">
                    <option>Choose State</option>
                    <option value="">DELHI</option>
                    <option value="">RAJASTHAN</option>
                    <option value="">UTTAR PRADESH</option>
                </select>
            </div>
            <Row
                id="zip"
                label="Zip"
                sz="2"
                value={values.zip}
                onChange={handleChange}
            />
            <Row
                id="linkedIn"
                label="Linked In"
                type="url"
                value={values.linkedIn}
                onChange={handleChange}
            />
            <Row
                id="github"
                label="Github"
                type="url"
                value={values.github}
                onChange={handleChange}
            />
        </>
    );
};
