import {ActionPupilsType, PupilsType, StudentType} from "./ReducersType";


const initialState = {

}

export const StudentReducer = (state = initialState, action:ActionPupilsType) => {
    switch (action.type) {


        default:
            return state
    }
}


export const getStudent = (id:number) =>({type:"GET_STUDENT_PROFILE",id})
