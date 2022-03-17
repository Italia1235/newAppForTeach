import {Student} from "./Student";
import {useAppSelector} from "../../../Hooks/Selector";


export const StudentContainer = () => {
    const pupils =useAppSelector(state =>state.pupils.pupils )
    return (
        <div>{pupils[0].name}</div>
    );
};

