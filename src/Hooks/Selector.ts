import {TypedUseSelectorHook, useSelector} from 'react-redux';
import { RootState} from "../Bll/Store/Store";



export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;