import {doRequest} from "../../api/api";
import {deleteStudent, postStudent} from "../../api/endpoint";

export const addNewStudent = (student) => {
  return dispacth => {
      doRequest(postStudent(student)).then(response => {
          console.log(response)
      })
      dispacth({type:"student-add", payload:student})
  }
}
export const addNewStudentBulk = (students) => {
  return dispacth => {
      dispacth({type:"student-bulk-insert", payload:students})
  }
}
export const removeStudent = (student) => {
  return dispacth => {
      dispacth({type:"student-remove", payload:student})
      doRequest(deleteStudent(student)).then(response => {
          console.log(response)
      })
  }
}
export const removeStudentBulk = () => {
  return dispacth => {
      dispacth({type:"student-bulk-remove"})
  }
}

export const updateStudent = (student) => {
  return dispacth => {
      doRequest(postStudent(student)).then(response => {
          console.log(response)
      })
      dispacth({type:"student-update", payload:student})
  }
}