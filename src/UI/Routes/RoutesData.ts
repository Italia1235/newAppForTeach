import {PupilsContainer} from "../Pages/Pupils";
import {PUPILS_ROUTE, STUDENT_ROUTE} from "../../Utils";
import {Student} from "../Pages/Student/Student";
import {Error404} from "../Pages/Error/Error404";

export const allRoutes = [
    {
        path: PUPILS_ROUTE,
        Element: PupilsContainer
    },
    {
        path: STUDENT_ROUTE + "/:id",
        Element: Student
    },
    {
        path:"*",
        Element: Error404

    }
]