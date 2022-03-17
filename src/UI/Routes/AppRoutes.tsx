import {Route, Routes} from 'react-router-dom';
import {allRoutes} from "./RoutesData";


export const AppRoutes = () => {
    return (
        <Routes>
            {allRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>}/>)}
        </Routes>)
};