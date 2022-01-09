import Row from "../form/Row"
import H2 from "../form/H2"


const Heading = (props) => {

    if( props.step !== 0){
        return null;
    }
    
    return(
            <form className="row g-3 col">
                <H2>How should your recruiter call you?</H2>
                <Row id="First name" />
                <Row id="Last name" />
                <Row id="Email" type="email" />
                <Row id="Phone No." type="number" />
                <Row id="Address" sz="12" />
                <Row id="City" />
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option>Choose State</option>
                    <option value="">...</option>
                    </select>
                </div>
                <Row id="Zip" sz="2" />
                <Row id="Linkedin" type="url" />
                <Row id="Github" type="url" />
                {/* <div className="col-12">
                    <button type="submit" onClick={handleClick} className="btn btn-primary btn">Next</button>
                </div> */}
            </form>
    )
}
export default Heading;