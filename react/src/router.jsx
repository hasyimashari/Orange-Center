import { createBrowserRouter } from "react-router-dom";
import Layout_dashboard from "./components/dashboard_layout";
import Layout_signinup from "./components/signin_up_layout";
import Dashboard_user from "./views/dashboard_user";
import Not_found from "./views/not_found";
import Login from "./views/login";
import Register from "./views/register"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout_dashboard/>,
        children: [
            {
                path: 'user',
                element: <Dashboard_user/>
            },
        ],
    },
    {
        path: '/',
        element: <Layout_signinup/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            ]
        },
    {
        path: '*',
        element: <Not_found/>,
    }
])

export default router