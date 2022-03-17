import {useAppSelector} from "../../../Hooks/Selector";
import {Pupils} from "./Pupils";


export const PupilsContainer = () => {
  const pupils =useAppSelector(state =>state.pupils.pupils )

    return (
      <Pupils pupils={pupils}/>
    );
}
