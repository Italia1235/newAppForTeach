import {PupilsContainer} from "../Pages/Pupils";
import {PUPILS_ROUTE, STUDENT_ROUTE} from "../../Utils";
import {Student} from "../Pages/Student/Student";

export const allRoutes = [
    {
        path: PUPILS_ROUTE,
        Component: PupilsContainer
    },
    {
        path: STUDENT_ROUTE + "/:id",
        Component: Student
    }
]