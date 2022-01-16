import H2 from "../form/H2";
import Row from "../form/Row";

const Projects = ({step, values, handleChange}) => {

    if( step !== 3 ){
        return null;
    }
    
    return(
        <>
            <H2>List down your projects(Max-2)</H2>
            <Row id="name" label="Project Name" value={values.name} onChange={handleChange} />
            <div className="col-md-12">
                <label for="desc" className="form-label">Project Description</label>
                <textarea className="form-control" id="desc" label="Project Description" name="desc" value={values.desc} rows="3" onChange={handleChange} sz="12" />
            </div>
            <Row id="name2" label="Project-2 Name" value={values.name2} onChange={handleChange} />
            <div className="col-md-12">
                <label for="desc2" className="form-label">Project-2 Description</label>
                <textarea className="form-control" id="desc2" label="Project-2 Description" name="desc2" value={values.desc2} rows="3" onChange={handleChange} sz="12" />
            </div>
        </>
    )
}

export default Projects;