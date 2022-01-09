
const Hero = (props) => {
    return (
        <div className="p-3">
            <h2 className="mb-5 row font-monospace text-center">How should your recruiter call you?</h2>
            <div className="d-lg-flex justify-content-between">
            <form className="row g-3 col">
                {props.children}
            </form>
            </div>
        </div>
    )
}

export default Hero;

            // {props.children}
