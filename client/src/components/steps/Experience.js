import { useContext } from "react";
import ResumeContext from "../context/ResumeContext";
import resumeData from "../context/resumeData1";
import Row from "../form/Row"
import H2 from "../form/H2"

const Experience = ({step, values, handleChange}) => {
    // const step = values.step;

    // const [step] = useContext(ResumeContext);

    
    if( step !== 1){
        return null;
    }
    
    return (
        <>
            <H2>Tell us about your most recent job</H2>
            <Row label="Company Name" id="cName" value={values.cName} onChange={handleChange} />
            <Row label="Job Title" id="job" value={values.job} onChange={handleChange} />
            <Row label="Country" id="country" sz="4" value={values.country} onChange={handleChange} />
            <Row label="State" id="state" sz="4" value={values.state} onChange={handleChange} />
            <Row label="City" id="city" sz="4" value={values.city} onChange={handleChange} />
            <Row label="Start Date" id="sDate" type="Date" value={values.sDate} onChange={handleChange} />
            <Row label="End Date" id="eDate" type="Date" value={values.eDate} onChange={handleChange} />
            <div className="col-md-12">
                <label for="Job Description" className="form-label"> Job Description</label>
                <textarea id="Job Description" className="form-control" name="jobDesc" value={values.jobDesc} onChange={handleChange} />
            </div>
        </>
    )
}

export default Experience;