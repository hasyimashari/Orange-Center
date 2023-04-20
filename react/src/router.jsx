import { createBrowserRouter } from "react-router-dom";
import Layout_dashboard from "./components/dashboard_layout";
import Layout_signinup from "./components/signin_up_layout";

import Dashboar_admin from "./views/dashboard_admin"
import Dashboard_user from "./views/dashboard_user";
import Dashboard_pakar from "./views/dashboard_pakar";

import Not_found from "./views/not_found";
import Login from "./views/login";
import Register from "./views/register"
import Profile from "./views/profil"
import View_profile from "./views/view_profil"
import Edit_porfil from "./views/edit_profil"
import Administrasi_akun from "./views/administrasi_akun";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout_dashboard/>,
        children: [
            {
                path: 'user',
                element: <Dashboard_user/>
            },
            {
                path: 'profil',
                element: <Profile/>
            },
            {
                path: 'view',
                element: <View_profile/>
            },
            {
                path: 'edit',
                element: <Edit_porfil/>

            }
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
    },
    {
        path: '/admin',
        element: <Dashboar_admin/>,
    },
    {
        path: '/admin akun',
        element: <Administrasi_akun/>
    },
    {
        path: '/pakar',
        element: <Dashboard_pakar/>,
    }
])

export default router