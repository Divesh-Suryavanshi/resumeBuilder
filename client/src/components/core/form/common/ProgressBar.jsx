export const ProgressBar = ({ step, setStep }) => {
    const Left = step * 25;

    const btnColor = (id) => {
        if (id <= step) return "#5A20CB";
        else return "#5c636a";
    };
    return (
        <div className="position-relative m-5">
            <div className="progress" style={{ height: "3px" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${Left}%` }}
                ></div>
            </div>
            <button
                type="button"
                className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary"
                style={{ height: "2rem", background: `${btnColor(0)}` }}
                id="0"
                onClick={() => {
                    setStep(0);
                }}
            >
                Heading
            </button>
            <button
                type="button"
                className="position-absolute top-0 translate-middle btn btn-sm btn-primary"
                onClick={() => {
                    setStep(1);
                }}
                id="1"
                style={{
                    height: "2rem",
                    left: "25%",
                    background: `${btnColor(1)}`,
                }}
            >
                Experience
            </button>
            <button
                type="button"
                className="position-absolute top-0 translate-middle btn btn-sm btn-primary"
                onClick={() => {
                    setStep(2);
                }}
                id="2"
                style={{
                    height: "2rem",
                    left: "50%",
                    background: `${btnColor(2)}`,
                }}
            >
                Education
            </button>
            <button
                type="button"
                className="position-absolute top-0 translate-middle btn btn-sm btn-secondary"
                onClick={() => {
                    setStep(3);
                }}
                id="3"
                style={{
                    height: "2rem",
                    left: "75%",
                    background: `${btnColor(3)}`,
                }}
            >
                Projects
            </button>
            <button
                type="button"
                className="position-absolute top-0 translate-middle btn btn-sm btn-secondary"
                onClick={() => {
                    setStep(4);
                }}
                id="4"
                style={{
                    height: "2rem",
                    left: "100%",
                    background: `${btnColor(4)}`,
                }}
            >
                Final
            </button>
        </div>
    );
};
