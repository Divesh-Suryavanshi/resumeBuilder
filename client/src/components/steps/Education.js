import Row from "../form/Row"
import H2 from "../form/H2"

const Education = ({step, values, handleChange}) => {
    //   const step = values.step;

    if( step !== 2)
        return null;

    return (
        <form className="row g-3 col">
            <H2>Tell us about your Education</H2>
            <Row id="instituteName" label="Institute Name" sz="12" value={values.instituteName} onChange={handleChange} />
            <Row id="country" sz="4" label="Country" value={values.country} onChange={handleChange} />
            <Row id="state" sz="4" label="State" value={values.state} onChange={handleChange} />
            <Row id="city" sz="4" label="City" value={values.city} onChange={handleChange} />
            <Row id="degree" label="Degree" value={values.degree} onChange={handleChange} />
            <Row id="fOS" label="Field of study" value={values.fOS} sz="" onChange={handleChange} />
            <Row id="sDate" label="Start Date" value={values.sDate} type="Date" onChange={handleChange} />
            <Row id="eDate" label="End Date" value={values.eDate} type="Date" onChange={handleChange} />
            {/* <div className="col-md-12">
                <label for="Job Description" className="form-label"> Job Description</label>
                <textarea id="Job Description" className="form-control" />
            </div> */}
        </form>
    )
}

export default Education;