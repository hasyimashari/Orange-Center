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
import Konsultasi_pakar from "./views/konsultasi_pakar";
import Chat_pakar from "./views/chat_pakar";
import Chat_user from "./views/chat_user";

import Permintaan from "./views/permintaan";
import Permintaan_user from "./views/permintaan_user";
import Permintaan_admin from "./views/permintaan_admin";

import Profile_pakar from "./views/profil_pakar"
import Profile_admin from "./views/profil_admin"
import Profile_user from "./views/profil_pengguna"
import Premium_page from "./views/premium_page";

import Tambah_artikel from "./views/tambah_artikel";
import Artikel_admin from "./views/artikel_admin";
import Melihat_artikel_admin from "./views/melihat_artikel_admin";
import Edit_artikel from "./views/edit_artikel";
import Artikel_pakar from "./views/artikel_pakar";
import Melihat_artikel_pakar from "./views/melihat_artikel_pakar";
import Artikel_user from "./views/artikel_user";
import Melihat_artikel_user from "./views/melihat_artikel_user";

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
            {
                path: 'admin-permintaan',
                element: <Permintaan_admin/>,
            },
            {
                path: 'admin-artikel',
                element: <Artikel_admin/>,
            },
            {
                path: 'admin-buat-artikel',
                element: <Tambah_artikel/>,
            },
            {
                path: 'admin-lihat-artikel',
                element: <Melihat_artikel_admin/>,
            },
            {
                path: 'admin-edit-artikel',
                element: <Edit_artikel/>,
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
            {
                path: 'pakar-konsultasi',
                element: <Konsultasi_pakar/>,
            },
            {
                path: 'pakar-chat',
                element: <Chat_pakar/>,
            },
            {
                path: 'pakar-artikel',
                element: <Artikel_pakar/>,
            },
            {
                path: 'pakar-lihat-artikel',
                element: <Melihat_artikel_pakar/>,
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
            {
                path: 'user-premium',
                element: <Premium_page/>,
            },
            {
                path: 'user-konsultasi',
                element: <Konsultasi_user/>,
            },
            {
                path: 'user-chat',
                element: <Chat_user/>,
            },
            {
                path: 'user-permintaan',
                element: <Permintaan/>,
            },
            {
                path: 'user-permintaan-saya',
                element: <Permintaan_user/>,
            },
            {
                path: 'user-artikel',
                element: <Artikel_user/>,
            },
            {
                path: 'user-lihat-artikel',
                element: <Melihat_artikel_user/>,
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