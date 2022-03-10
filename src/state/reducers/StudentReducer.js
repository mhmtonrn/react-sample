import {TOAST_TYPES, toaster} from "../../utils/utils";

const StudentReducer = (state = {students: [], count: 0}, action) => {
    const {type, payload} = action;
    const {students, count} = state;

    switch (type) {
        case "student-add":
            let exits = false
            students.forEach(student => {
                if (payload.no === student.no) {
                    exits = true;
                }
            })
            if (!exits) {
                students.push(payload)
                students.sort((a, b) => a.no > b.no ? 1 : -1)
                toaster(`${payload.name} öğrencisi başarılı şekilde eklendi`, TOAST_TYPES.SUCCESS)
            } else {
                toaster(`${payload.name} öğrencisi zaten mevcut`, TOAST_TYPES.WARNING)
            }
            return {students: students, count: students.length}

        case "student-remove":
            students.forEach((student, index) => {
                if (student.no === payload.no) {
                    students.splice(index, 1)
                    toaster(`${student.name} öğrencisi başarılı şekilde silindi`, TOAST_TYPES.ERROR)
                }
            })
            return {students, count: students.length}

        case "student-bulk-insert":
            students.push(...payload)
            students.sort((a, b) => parseInt(a.no) >parseInt(b.no) ? -1 : 1)
            toaster(`${payload.length} öğrenci başarılı şekilde eklendi`, TOAST_TYPES.SUCCESS)
            return {students, count: students.length}

        case "student-bulk-remove":
            students.splice(0, students.length);
            return {students, count: students.length}

        case "student-update":
            students.forEach((student, index) => {
                if (student.no === payload.no) {
                    students[index] = payload
                    toaster(`${payload.name} öğrencisi başarılı şekilde güncellendi`, TOAST_TYPES.SUCCESS)
                }
            })
            return {students, count: students.length}

        default:
            return {students, count}
    }
}


export default StudentReducer;

