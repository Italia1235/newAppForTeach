import {ActionPupilsType, PupilsType, StudentType} from "./ReducersType";
import {Students} from "../../Data/Data";
import {Dispatch} from "redux";


const initialState = {
    pupils: [] as StudentType[],
    }

export const PupilsReducer = (state:InitStateType = initialState, action:ActionPupilsType):InitStateType => {
    switch (action.type) {
        case "GET_STUDENT_PROFILE":
            //@ts-ignore
          return ( {...state,pupils: state.pupils.find((el:StudentType)=>el.id===action.id)})

        default:
            return state
    }
}


export const getStudent = () =>({type:"GET_STUDENT_PROFILE",id})



//types
type InitStateType = typeof initialState;

const getPupils = (dispath:Dispatch)=>{

}