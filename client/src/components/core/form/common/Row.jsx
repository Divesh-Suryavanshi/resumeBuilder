export const Row = (props) => {
    return (
        <div className={`col-md-${props.sz || "6"}`}>
            <label htmlFor={props.id} className="form-label">
                {" "}
                {props.label || props.id}{" "}
            </label>
            <input
                type={props.type || "text"}
                className="form-control"
                id={props.id}
                value={props.value}
                name={props.id}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Row;
