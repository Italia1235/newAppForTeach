import {Route, Routes} from 'react-router-dom';
import {allRoutes} from "./RoutesData";


export const AppRoutes = () => {
    return (
        <Routes>
            {allRoutes.map(({path, Element}) =>
                <Route path={path} element={<Element/>}/>)}
        </Routes>)
};