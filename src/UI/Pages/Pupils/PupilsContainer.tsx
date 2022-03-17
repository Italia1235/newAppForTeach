import {useAppSelector} from "../../../Hooks/Selector";
import {Pupils} from "./Pupils";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getPupils} from "../../../Bll/Reducer/PupilsReducer";


export const PupilsContainer = () => {
  const dispatch = useDispatch();

  const pupils =useAppSelector(state =>state.pupils.pupils )
  useEffect(()=>{dispatch(getPupils())},[])

    return (
      <Pupils pupils={pupils}/>
    );
}
