import Row from "../form/Row"

const Heading = (props) => {
    return(
        <div className="d-lg-flex justify-content-between">
            <form className="row g-3 col">
                <h2 className="mt-3 row font-monospace text-center">How should your recruiter call you?</h2>
                <Row id="First name" />
                <Row id="Last name" />
                <Row id="Email" type="email" />
                <Row id="Phone No." type="number" />
                {/* <Row id="Password" type="password" /> */}
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
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck" >
                            Check me out
                        </label>
                    </div>
                </div> */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn">Next</button>
                </div>
            </form>
            <div className="right m-2 d-none d-lg-block text-center col">iframe</div>
        </div>
    )
}
export default Heading;