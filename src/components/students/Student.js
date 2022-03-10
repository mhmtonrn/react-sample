import {Button} from "react-bootstrap";
import "./student.css"

export const Student = ({student, removeStudentAction, editStudentAction}) => {
    return (<div className="card student-card">
        <img className="card-img-bottom" src={student.img} alt={student.name}/>
        <div className="card-body">
            <h5 className="card-title"> {student.no}-{student.name}</h5>
            <p className="card-text">{student.description}</p>
            <hr/>
            <div className="cardButton">
                <Button onClick={() => editStudentAction(student)}> Edit</Button>
                <Button variant={"danger"} className={"ms-1"}
                        onClick={() => removeStudentAction(student)}> Remove</Button>
            </div>

        </div>
    </div>);
};