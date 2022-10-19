import { React, useState } from "react";
// import Provider from '../components/Provider';
// import Theme from "../components/theme/Theme"
import {
    Heading,
    Experience,
    Education,
    Projects,
    Final,
} from "../components/core/form/";

import { ProgressBar, FormButton } from "../components/core/form/common";

// import ResumeContext from '../components/context/ResumeContext';
import resumeData from "../context/resumeData";

const formState = ["Heading", "Experience", "Education", "Projects", "Final"];

export const CreateResume = () => {
    const [formData, setFormData] = useState(resumeData);

    const { step } = formData;
    // console.log(formState);

    const setStep = (val) => {
        setFormData({ ...formData, step: val });
    };

    const handleClick = (e, val) => {
        e.preventDefault();
        setStep(val);
    };

    const handleChange = ({ target: { value, name } }) => {
        // setForm step={step}DhandleClick={handleClick} ata({...formData, [name]: value});
        setFormData({
            ...formData,
            [step]: { ...formData[formData.step], [name]: value },
        });
    };

    // console.log({...formData, [0]: { ...formData[formData.step], ["divesh"] : 7 } })

    const Form = [
        <Heading
            values={formData[formState[step]]}
            step={step}
            handleChange={handleChange}
        />,
        <Experience
            values={formData[formState[step]]}
            step={step}
            handleChange={handleChange}
        />,
        <Education
            values={formData[formState[step]]}
            step={step}
            handleChange={handleChange}
        />,
        <Projects
            values={formData[formState[step]]}
            step={step}
            handleChange={handleChange}
        />,
        <Final
            values={formData[formState[step]]}
            step={step}
            handleChange={handleChange}
        />,
    ];

    return (
        // <Provider>
        // <Theme PageClass="" Class="my-5">
        <>
            <ProgressBar step={step} setStep={setStep} />
            <div className="p-3">
                <div className="d-lg-flex my-3 justify-content-between">
                    <form className="row g-3 col">{Form[step]}</form>
                    {/* <div className="right mx-2 d-none d-lg-block text-center col">iframe</div> */}
                </div>
                <FormButton
                    step={step}
                    handleClick={handleClick}
                    formData={formData}
                />
            </div>
        </>
        // </Theme>
        // </Provider>
    );
};
