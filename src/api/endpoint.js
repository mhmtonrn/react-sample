import {REQ_TYPE} from "./api";

export const getStudents = {
    type : REQ_TYPE.GET,
    endpoint : '/students'
};

export const postStudent = (student) => ({
    type : REQ_TYPE.POST,
    endpoint : '/students',
    payload: student
});

export const deleteStudent = (student) => ({
    type : REQ_TYPE.DELETE,
    endpoint : `/students/${student.no}`,
});

export const putStudent = (student) => ({
    type : REQ_TYPE.PUT,
    endpoint : `/students/${student.no}`,
    payload: student
});