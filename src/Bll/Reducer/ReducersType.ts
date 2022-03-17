import {getStudent} from "./PupilsReducer";

export type ActionPupilsType = ReturnType<typeof getStudent>

export type StudentType = {
    name:string
    id:number
    soname:string
    startDate:number
    sex:string
    subject:string
    lessons?:[]
}
export type PupilsType = StudentType[]
