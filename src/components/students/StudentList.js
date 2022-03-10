import {useEffect, useReducer} from "react";
import {Button} from "react-bootstrap";
import {Student} from "./Student";
import {studentReducer, studentsDate} from "./StudentReducer";
import {StudentFormJs} from "./StudentFormJs";
import {TOAST_TYPES, toaster} from "../../utils/utils";
import {doRequest} from "../../api/api";
import {getStudents, postStudent} from "../../api/endpoint";

export const StudentList = () => {

    const studentStateInitial = {
        students: [],
        count: 0
    }

    const[studentState, studentDispatch] = useReducer(studentReducer, studentStateInitial)

    const removeStudentAction = (student) => {
        studentDispatch({type:"student-remove", payload:student})
    }

    const studentAddAction = (student) => {
        doRequest(postStudent(student)).then(response => {
            console.log(response)
        })
        studentDispatch({type:"student-add", payload:student})
    }

    const addStudentBulkInsert = () => {
        studentDispatch({type:"student-bulk-insert", payload:studentsDate})
    }

    useEffect(() => {
        doRequest(getStudents).then(students => {
            studentDispatch({type:"student-bulk-insert", payload:students})
        }).catch(error => {
            console.log(error)
            toaster("apiden hata aldık", TOAST_TYPES.ERROR)
        })
    }, [])

    return <div>
        <StudentFormJs addStudent={studentAddAction}/>
        <hr/>
        <Button onClick={addStudentBulkInsert}> Toplu Kayıt</Button>

        <br/>
        Students Count : {studentState.count}
        <hr/>
        <div className={"row"}>
            {studentState.students.map(student => <div className={"col-lg-4 col-md-6 col-sm-12 py-3"} key={student.no}>
            <Student student={student} removeStudentAction={removeStudentAction}/>
            </div>)}
        </div>

    </div>
}