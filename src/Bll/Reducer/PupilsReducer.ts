import {ActionPupilsType, PupilsType, StudentType} from "./ReducersType";
import {Dispatch} from "redux";
import {pupilsAPi} from "../../Dal/api/api";


const initialState = {
    pupils: [] as StudentType[],
}

export const PupilsReducer = (state: InitStateType = initialState, action: ActionPupilsType): InitStateType => {
    switch (action.type) {
        case "SET_STUDENTS":

            return {...state, pupils: action.students}

        default:
            return state
    }
}


export const setStudents = (students: Array<StudentType>) =>
    ({type: "SET_STUDENTS", students})


//types
type InitStateType = typeof initialState;

export const getPupils = () => {
    return (dispatch: Dispatch) => {
        pupilsAPi.getPupils().then((res) => {
            dispatch(setStudents(res.data.pupils))
        })
    }
}

export const getStudentProfile = (id:number) =>{
    return (dispatch:Dispatch) =>{
        getPupils()
    }
}