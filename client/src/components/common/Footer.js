import {Link} from "react-router-dom"

export const Footer = ({Class=""}) => {
    const handleClick = (src) => {
        window.open(src,"_blank");
    }
    return <footer className={`pt-2 bg-primary text-light text-center mb-0 ${Class}`}>
            <div className="container-fluid footer-social h5">
                <i className="bi bi-facebook p-2" onClick={(e) => handleClick("https://www.facebook.com/")} style={{cursor: "pointer"}} />
                <i className="bi bi-twitter p-2" onClick={(e) => handleClick("https://www.twitter.com/")} style={{cursor: "pointer"}} />
                <i className="bi bi-envelope p-2" onClick={(e) => handleClick("https://www.gmail.com/")} style={{cursor: "pointer"}} />
            </div>
            <small><p className="mb-1">Terms of Use - Privacy Policy <br /> &copy; copyright</p></small>
    </footer>
}