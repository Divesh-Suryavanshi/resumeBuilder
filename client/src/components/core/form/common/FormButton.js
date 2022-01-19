import createPDF from "../../../../features/createPDF";

export const FormButton = ({ handleClick, formData }) => {
    const { step } = formData;
    let prev;
    if (step > 0) {
        prev = (
            <button
                type="submit"
                onClick={(e) => {
                    handleClick(e, step - 1);
                }}
                className="btn btn-primary my-3 me-3"
            >
                Previous
            </button>
        );
    }

    if (step === 4) {
        return (
            <>
                {prev}
                <button
                    type="submit"
                    onClick={() => createPDF(formData)}
                    className="btn btn-primary my-3 me-3"
                >
                    Download
                </button>
            </>
        );
    }

    return (
        <>
            {prev}
            <button
                type="submit"
                onClick={(e) => {
                    handleClick(e, step + 1);
                }}
                className="btn btn-primary my-3 me-3"
            >
                Next
            </button>
        </>
    );
};
