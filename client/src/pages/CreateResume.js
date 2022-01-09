import {React, useState} from 'react';
import Theme from "../components/theme/Theme"
import Heading from "../components/steps/Heading"
import Experience from "../components/steps/Experience"
import Education from '../components/steps/Education';

// const Steps = {
//     1 : <Heading />,
//     2 : <Experience />,
//     3 : <Education />,
//     // 4 : <Skills />,
//     // 5 : <Summary />
// }

export const CreateResume = () => {
    const [step, setStep] = useState(0);

    const handleClick = (e, val) => {
        e.preventDefault();
        setStep(val);
    }

    const Left = step * 25;

    const btnColor = (id) => {
        if(id <= step)
            return "#5A20CB"
        else return "#5c636a"
    }
    
    return(
        <Theme PageClass="" Class="my-5">
            <div className="container">
                <div className="position-relative m-5">
                    <div className="progress" style={{height: "3px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: `${Left}%`}}></div>
                    </div>
                    <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary" style={{ height:"2rem",
                background : `${btnColor(0)}`}} id = "0" onClick={() => {setStep(0)}}>Heading</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-primary" onClick={() => {setStep(1)}} id = "1" style={{height:"2rem", left: "25%", background : `${btnColor(1)}`}}>Experience</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-primary" onClick={() => {setStep(2)}} id = "2" style={{height:"2rem", left: "50%", background : `${btnColor(2)}`}}>Education</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-secondary" onClick={() => {setStep(3)}} id = "3" style={{height: "2rem", left: "75%", background : `${btnColor(3)}`}}>Skills</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-secondary" onClick={() => {setStep(4)}} id = "4" style={{height: "2rem", left: "100%", background : `${btnColor(4)}`}}>Summary</button>
                </div>

                <div className="p-3">
                    <div className="d-lg-flex my-3 justify-content-between">

                        <Heading step = {step} />     
                        <Experience step = {step} />
                        <Education step = {step} />

                        <div className="right mx-2 d-none d-lg-block text-center col">iframe</div>
                    </div>
                    <button type="submit" onClick={(e) => {handleClick(e, step -1)}} className="btn btn-primary my-3 me-3">Previous</button>
                    <button type="submit" onClick={(e) => {handleClick(e, step + 1)}} className="btn btn-primary my-3 me-3">Next</button>
                </div>

            </div>
        </Theme>
    )
}
