import {Student} from "./Student";
import {useEffect} from "react";
import {useDispatch} from "react-redux";


export const StudentContainer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch()},[])

    return (
        <Student/>
    );
};

