import { Link } from "react-router-dom"
// import Theme from "../components/theme/Theme"
import image from "../components/images/toe.png"

export const Welcome = () => {

    return(
        // <Theme Class="container mt-5 py-3" FooterClass="position-fixed bottom-0 w-100">
        // <div className="container">
           <div className="d-lg-flex align-items-center">
               <div className="container-fluid">
                   {/* <h1>Why you need a better looking resume?</h1> */}
                   <h1>Use the best resume maker as your guide</h1>
                   <p className="lead my-4">Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
                   <div className="text-center text-lg-start">
                        <Link to="/edit/resume" className="btn btn-primary btn-lg mt-3">Create My Resume</Link>
                    </div>
               </div>
               <div className="container-fluid d-none d-lg-block">
                <img src={image} className="img-fluid" />
                </div>
           </div>
        // </div>
        // </Theme>
    )
}
