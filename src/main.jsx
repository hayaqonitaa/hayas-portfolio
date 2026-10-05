
import './index.css'

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HelloWorld from "./belajar/hello-world/HelloWorld";
import Container from './belajar/hello-world/Container';
import MainContact from './belajar/tugas/MainContact';
import MainTask from './belajar/task/MainTask';
import Home from './Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <HelloWorld />,
    },
    {
        path: "tugas",
        element: <MainContact />
    },
    {
        path: "/task",
        element: <MainTask />
    },
]);

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        // saat pertama kali aplikasi dibuka, maka render pertama itu elemet di DOM belum ada, maka React menggunakan appendChild()
        // react hanya akan mengubah element di DOM, jika element tersebut berbeda dari hasil rendering
        //  render 2 kali karena strict mode, jadi kalo ada error bisa keliatan, dan counter mulai dari 2
        <StrictMode>
                <RouterProvider router={router} />
        </StrictMode>
    )