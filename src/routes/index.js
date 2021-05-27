import { Home } from "../pages/home";
import { Users } from "../pages/users";
import AddUser from "../pages/addUser";

export const AppRoutes = [

    {
        path: '/cursor-homework24/',
        exact: true,
        component: <Home />
    },
    {
        path: '/cursor-homework24/users',
        component: <Users />
    },
    {
        path: '/cursor-homework24/add-user',
        component: <AddUser />
    }

];
