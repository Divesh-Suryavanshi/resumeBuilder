const Row = (props) => {
    return   <div className={`col-md-${props.sz || "6"}`}>
        <label for={props.id} className="form-label"> {props.label || props.id} </label>
        <input type={props.type || "text"} className="form-control" id={props.id} />
    </div>
}

export default Row;