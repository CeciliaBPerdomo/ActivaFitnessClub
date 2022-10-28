import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import {Home} from "./pages/home";
import {Demo} from "./pages/demo";
import {Single} from "./pages/single";
import injectContext from "./store/appContext";

import {Navbar} from "./component/navbar";
import {Footer} from "./component/footer";
import {CrearAlumno} from "./component/crearAlumnos";
import {ListaAlumno} from "./component/listaAlumnos";
import {VistaProducto} from "./component/vistaProductos";
import {CrearEjercicio} from "./component/crearEjercicio"
import Log_in from "./component/loguearse.jsx";
import {MisPagos} from "./component/mispagos.jsx";

// create your first component
const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar/>

                    <Routes>
                        <Route element={<Home/>}
                            path="/"/>
                        <Route element={<Demo/>}
                            path="/demo"/>
                        <Route element={<CrearAlumno/>}
                            path="/crearAlumno"/>
                        <Route element={<ListaAlumno/>}
                            path="/listaAlumno"/>
                        <Route element={<VistaProducto/>}
                            path="/vistaProducto"/>
                        <Route element={<CrearEjercicio/>}
                            path="/crearEjercicio"/>
                        <Route element={<Log_in/>}
                            path="/login"/>
                        <Route element={<Single/>}
                            path="/single/:theid"/>
                        <Route element={<MisPagos/>}
                            path="/mispagos/:theid"/>
                        <Route element={
                            <h1>Not found!</h1>
                        }/>
                    </Routes>
                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
