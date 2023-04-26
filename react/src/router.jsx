import { createBrowserRouter } from "react-router-dom";
import Layout_signinup from "./components/signin_up_layout";
import Layout_admin from "./components/dashboard_admin_layout";
import Layout_user from "./components/dashboard_user_layout";
import Layout_pakar from "./components/dashboard_pakar_layout";


import Dashboar_admin from "./views/dashboard_admin"
import Dashboard_user from "./views/dashboard_user";
import Dashboard_pakar from "./views/dashboard_pakar";
import Administrasi_akun from "./views/administrasi_akun";

import Profile from "./views/profil"
import View_profile from "./components/view_profil"
import Edit_porfil from "./components/edit_profil"

import Register from "./views/register"
import Login from "./views/login";
import Not_found from "./views/not_found";

import Dec from "./components/decision";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout_user/>,
        children: [
            {
                path: 'user',
                element: <Dashboard_user/>
            },
            {
                path: 'profil',
                element: <Profile/>,
            },
        ],
    },
    {
        path: '/',
        element: <Layout_admin/>,
        children: [
            {
                path: 'admin-dashboard',
                element: <Dashboar_admin/>
            },
            {
                path: 'admin-profil',
                element: <Profile/>,
            },
            {
                path: 'admin-administrasi',
                element: <Administrasi_akun/>
            },
        ],
    },
    {
        path: '/',
        element: <Layout_pakar/>,
        children: [
            {
                path: 'pakar-dashboard',
                element: <Dashboard_pakar/>,
            },
            {
                path: 'pakar-profil',
                element: <Profile/>,
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