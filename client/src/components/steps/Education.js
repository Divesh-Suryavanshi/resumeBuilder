import Row from "../form/Row"
import H2 from "../form/H2"

const Education = (props) => {

    if( props.step !== 2)
        return null

    return (
        <form className="row g-3 col">
            <H2>Tell us about your Education</H2>
            <Row id="School/College Name" sz="12" />
            <Row id="Country" sz="4" />
            <Row id="State" sz="4" />
            <Row id="City" sz="4" />
            <Row id="Degree" />
            <Row id="Field of Study" sz="12" />
            <Row id="Start Date" type="Date" />
            <Row id="End Date" type="Date" />
            {/* <div className="col-md-12">
                <label for="Job Description" className="form-label"> Job Description</label>
                <textarea id="Job Description" className="form-control" />
            </div> */}
        </form>
    )
}

export default Education;