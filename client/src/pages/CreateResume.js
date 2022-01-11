import { React, useContext, useState} from 'react';
// import Provider from '../components/Provider';
import Theme from "../components/theme/Theme"
import Heading from "../components/steps/Heading"
import Experience from "../components/steps/Experience"
import Education from '../components/steps/Education';
// import ResumeContext from '../components/context/ResumeContext';
import resumeData from '../components/context/resumeData';
// import createPDF from '../core/createPDF';
import axios from "axios";
import {saveAs} from "file-saver"

// const Steps = {
//     1 : <Heading />,
//     2 : <Experience />,
//     3 : <Education />,
//     // 4 : <Skills />,
//     // 5 : <Summary />
// }

export const CreateResume = () => {
    
    const [data, setData] = useState(resumeData);

    const step = data.step;

    const setStep = (val) => {
        setData({...data, step : val})
    };


    const handleClick = (e, val) => {
        e.preventDefault();
        setStep(val);
    }

    const Left = step * 50;

    const btnColor = (id) => {
        if(id <= step)
            return "#5A20CB"
        else return "#5c636a"
    }

    const handleChange = ({target: {value, name}}) => {
        // setData({...data, [name]: value});
        setData({...data, [step]: { ...data[data.step], [name] : value } })
    }

    // console.log({...data, [0]: { ...data[data.step], ["divesh"] : 7 } })

    const values = data;

    const createPDF = () => {
        axios
            .post ('/api/create-pdf', data)
            .then (() => {
                axios
                    .get ('/api/fetch-pdf', {responseType: 'arraybuffer'})
                    .then (res => {
                        const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
                        saveAs (pdfBlob, `${data['0'].firstName}'s Resume.pdf`);
                    })  
                    .catch (err => {
                        console.log (err);
                    });
            })
            .catch (err => {
                console.log (err);
            });
    };

    let Button;

    if(step === 2){
        Button = <div>
            <button type="submit" onClick={(e) => {handleClick(e, step -1)}} className="btn btn-primary my-3 me-3">Previous</button>
            <button type="submit" onClick={createPDF} className="btn btn-primary my-3 me-3">Download</button>
        </div>
    } else {
        Button =
        <div>
            <button type="submit" onClick={(e) => {handleClick(e, step -1)}} className="btn btn-primary my-3 me-3">Previous</button>
            <button type="submit" onClick={(e) => {handleClick(e, step + 1)}} className="btn btn-primary my-3 me-3">Next</button>
        </div>
        }
    
    return(
        // <Provider>
        <Theme PageClass="" Class="my-5">
            <div className="container">
                <div className="position-relative m-5">
                    <div className="progress" style={{height: "3px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: `${Left}%`}}></div>
                    </div>
                    <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary" style={{ height:"2rem",
                    background : `${btnColor(0)}`}} id = "0" onClick={() => {setStep(0)}}>Heading</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-primary" onClick={() => {setStep(1)}} id = "1" style={{height:"2rem", left: "50%", background : `${btnColor(1)}`}}>Experience</button>
                    <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-primary" onClick={() => {setStep(2)}} id = "2" style={{height:"2rem", left: "100%", background : `${btnColor(2)}`}}>Education</button>
                    {/* <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-secondary" onClick={() => {setStep(3)}} id = "3" style={{height: "2rem", left: "75%", background : `${btnColor(3)}`}}>Skills</button> */}
                    {/* <button type="button" className="position-absolute top-0 translate-middle btn btn-sm btn-secondary" onClick={() => {setStep(4)}} id = "4" style={{height: "2rem", left: "100%", background : `${btnColor(4)}`}}>Summary</button> */}
                </div>

                <div className="p-3">
                    <div className="d-lg-flex my-3 justify-content-between">
                        <Heading values={values['0']} step={step} handleChange={handleChange} />     
                        <Experience values={values['1']} step={step} handleChange={handleChange} />
                        <Education values={values['2']} step={step} handleChange={handleChange} />
                        {/* <div className="right mx-2 d-none d-lg-block text-center col">iframe</div> */}
                    </div>
                    {/* { () => {
                    if(step == 2){
                        <div>
                            <button type="submit" onClick={(e) => {handleClick(e, step -1)}} className="btn btn-primary my-3 me-3">Previous</button>
                            <button type="submit" onClick={createPDF} className="btn btn-primary my-3 me-3">Download</button>
                        </div>
                    } else {
                        return (
                        <div>
                            <button type="submit" onClick={(e) => {handleClick(e, step -1)}} className="btn btn-primary my-3 me-3">Previous</button>
                            <button type="submit" onClick={(e) => {handleClick(e, step + 1)}} className="btn btn-primary my-3 me-3">Next</button>
                        </div>
                        )}
                    }
                    } */}
                    {Button}
                </div>

            </div>
        </Theme>
        // </Provider>
    )
}
