import { createBrowserRouter } from "react-router-dom";
import Layout_signinup from "./components/signin_up_layout";
import Layout_admin from "./components/dashboard_admin_layout";
import Layout_user from "./components/dashboard_user_layout";
import Layout_pakar from "./components/dashboard_pakar_layout";

import Dashboar_admin from "./views/dashboard/dashboard_admin"
import Dashboard_user from "./views/dashboard/dashboard_user";
import Dashboard_pakar from "./views/dashboard/dashboard_pakar";

import Profile_pakar from "./views/dashboard/profil_pakar"
import Profile_admin from "./views/dashboard/profil_admin"
import Profile_user from "./views/dashboard/profil_pengguna"
import Premium_page from "./views/dashboard/premium_page";

import Administrasi_akun_pakar from "./views/administrasi akun/administrasiAkunPakar";
import Administrasi_akun_pengguna from "./views/administrasi akun/administrasiAkunUser";

import Konsultasi_user from "./views/konsultasi/konsultasiPageUser";
import Konsultasi_pakar from "./views/konsultasi/konsultasiPagePakar";
import Chat_pakar from "./views/konsultasi/chat_pakar";
import Chat_user from "./views/konsultasi/chat_user";

import Permintaan from "./views/permintaan/permintaanPageUser";
import Permintaan_user from "./views/permintaan/permintaanSaya";
import Permintaan_admin from "./views/permintaan/permintaanPageAdmin";

import Tambah_artikel from "./views/artikel/addArtikelPage";
import Artikel_admin from "./views/artikel/artikelPageAdmin";
import Melihat_artikel_admin from "./views/artikel/detailArtikelAdmin";
import Edit_artikel from "./views/artikel/editArtikelPage";
import Artikel_user from "./views/artikel/artikelPageUser";
import Melihat_artikel_user from "./views/artikel/detailArtikelPengguna";
import Artikel_pakar from "./views/artikel/artikelPagePakar";
import Melihat_artikel_pakar from "./views/artikel/detailArtikelPakar";

import Register from "./views/registrationPage"
import Login from "./views/loginPage";
import Not_found from "./views/notFoundPage";

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