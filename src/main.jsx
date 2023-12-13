import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <>
        <Navbar />
        <About />
        <Experience />
        <Footer />
        </>
    },
    {
      path: "/home",
      element: <>
      <Navbar />
      <About />
      <Experience />
      <Footer />
      </>
    },{
      path: "/contact",
  element: <>
      <Navbar />
      <Contact />
  </>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
