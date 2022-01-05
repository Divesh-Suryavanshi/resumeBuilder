import {React, useState} from 'react';
import Theme from "../components/theme/Theme"
import Heading from "../components/steps/step1"

export const CreateResume = () => {
    const [step, setStep] = useState(1);
    
    return(
        <Theme PageClass="" Class="my-5">
            <div className="container">
                <div className="position-relative m-5">
                    <div className="progress" style={{height: "3px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "50%"}}></div>
                    </div>
                    <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary" style={{ height:"2rem"}}>Heading</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-primary" style={{height:"2rem", left: "25%"}}>Experience</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-primary" style={{height:"2rem", left: "50%"}}>Education</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-secondary" style={{height: "2rem", left: "75%"}}>Skilss</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-secondary" style={{height: "2rem", left: "100%"}}>Summary</button>
                </div>
                <Heading />
            </div>
        </Theme>
    )
}

{/* <div className="d-block d-lg-grid align-items-center justify-content-center">
                        <h2 className="mb-5 row font-monospace">How Should Your Recruiter's Call You?</h2>
                        <div className="row mb-3 ">
                            <label for="Name" className="form-label col">Name</label>
                            <input type="text" id="Name" className="col" placeholder="John" />
                            <label for="Last Name" className="form-label col">Last Name</label>
                            <input type="text" id="Last Name" className="col" placeholder="Doe"/>
                        </div>
                        <div className="row mb-3">
                            <label for="Phone No." className="form-label col">Phone No.</label>
                            <input type="number" id="Phone No." className="col" placeholder="9999999" />
                            <label for="Email" className="form-label col">Email</label>
                            <input type="email" id="Emai" className="col" placeholder="john@cate.com"/>
                        </div>
                        <div className="row mb-3">
                            <label for="Address" className="form-label col-3">Address</label>
                            <input type="text" id="Address" className="col" placeholder="" />
                        </div>
                        <div className="row mb-3">
                            <label for="Github" className="form-label col">Github</label>
                            <input type="url" id="Github" className="col" placeholder="github link" />
                            <label for="LinkedIn" className="form-label col">Linkedin Url</label>
                            <input type="url" id="LinkedIn" className="col" placeholder="linkedin link"/>
                        </div>
</div> */}