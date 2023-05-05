import { createBrowserRouter } from "react-router-dom";
import Layout_signinup from "./components/signin_up_layout";
import Layout_admin from "./components/dashboard_admin_layout";
import Layout_user from "./components/dashboard_user_layout";
import Layout_pakar from "./components/dashboard_pakar_layout";


import Dashboar_admin from "./views/dashboard_admin"
import Dashboard_user from "./views/dashboard_user";
import Dashboard_pakar from "./views/dashboard_pakar";
import Administrasi_akun_pakar from "./views/administrasi_akun_pakar";
import Administrasi_akun_pengguna from "./views/administrasi_akun_pengguna";
import Konsultasi_user from "./views/konsultasi_user";

import Profile_pakar from "./views/profil_pakar"
import Profile_admin from "./views/profil_admin"
import Profile_user from "./views/profil_pengguna"

import Register from "./views/register"
import Login from "./views/login";
import Not_found from "./views/not_found";


const router = createBrowserRouter([
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
                element: <Profile_admin/>,
            },
            {
                path: 'admin-administrasi-pakar',
                element: <Administrasi_akun_pakar/>
            },
            {
                path: 'admin-administrasi-pengguna',
                element: <Administrasi_akun_pengguna/>
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
                element: <Profile_pakar/>,
            },
        ],
    },
    {
        path: '/',
        element: <Layout_user/>,
        children: [
            {
                path: 'user-dashboard',
                element: <Dashboard_user/>
            },
            {
                path: 'user-profil',
                element: <Profile_user/>,
            },
            // {
            //     path: 'user-konsultasi',
            //     element: </>,
            // },
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