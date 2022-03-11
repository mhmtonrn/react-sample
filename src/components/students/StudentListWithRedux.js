import {useEffect} from "react";
import {Button} from "react-bootstrap";
import {Student} from "./Student";
import {StudentFormJs} from "./StudentFormJs";
import {TOAST_TYPES, toaster} from "../../utils/utils";
import {doRequest} from "../../api/api";
import {getStudents} from "../../api/endpoint";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import * as ActionCreator from "../../state/actionCreators/ActionCreator";


export const StudentListWithRedux = () => {

    const dispact = useDispatch();
    const {addNewStudentBulk,removeStudent,removeStudentBulk} = bindActionCreators(ActionCreator, dispact);
    const studentState = useSelector(state => state.students);


    const removeStudentAction = (student) => {
        removeStudent(student)
    }

    const addStudentBulkInsert = (studentsDate) => {
        addNewStudentBulk(studentsDate)
    }

    function reloadStudents() {
        removeStudentBulk();
        doRequest(getStudents).then(students => {
            addStudentBulkInsert(students)
        }).catch(error => {
            console.log(error)
            toaster("apiden hata aldık", TOAST_TYPES.ERROR)
        })
    }

    useEffect(() => {
        reloadStudents();
    }, [])

    return <div>
        <StudentFormJs  />
        <hr/>
        <Button onClick={addStudentBulkInsert}> Toplu Kayıt</Button>

        <br/>
        Students Count : {studentState.count}
        <hr/>
        <div className={"row"}>
            {studentState.students.map(student => <div className={"col-lg-4 col-md-6 col-sm-12 py-3"} key={student.no}>
            <Student student={student} removeStudentAction={removeStudentAction} editStudentAction={removeStudentAction}/>
            </div>)}
        </div>

    </div>
}