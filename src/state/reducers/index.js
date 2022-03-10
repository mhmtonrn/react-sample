import {combineReducers} from "redux";
import StudentReducer from "./StudentReducer";


const reducers = combineReducers({
    students: StudentReducer,
})

export default reducers;