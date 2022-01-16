import H2 from "../form/H2";
import Row from "../form/Row";

const Final = ({step, values, handleChange}) => {
    
    if( step !== 4 ){
        return null;
    }

    return(
        <>
            <H2>Final Stage - About</H2>
            <Row label="Position" id="position" value={values.position} onChange={handleChange} />
            <div className="col-md-12">
                <label for="summary" className="form-label">Summary</label>
                <textarea name="summary" id="summary" rows="2" className="form-control" sz="12" value={values.summary} onChange={handleChange} />
            </div>
            <Row label="Skills" id="skills" value={values.skills} onChange={handleChange} />
            <Row label="Interests" id="interests" value={values.interests} onChange={handleChange} />
        </>
    )
}

export default Final;