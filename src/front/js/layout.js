import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CrearAlumno } from "./component/crearAlumnos";
import { ListaAlumno } from "./component/listaAlumnos";
import { VistaProducto } from "./component/vistaProductos";
import { CrearEjercicio } from "./component/crearEjercicio";
import Log_in from "./component/loguearse.jsx";
import { MisPagos } from "./component/mispagos.jsx";
import { QuienesSomos } from "./component/quienesSomos";
import { Planes } from "./component/planes";
import { VistaMensualidades } from "./component/vistaMensualidades.jsx";
import { VerEjercicio } from "./component/verEjercicios";
import { Alumno } from "./component/alumno.jsx";
import { CrearMensualidad } from "./component/crearMensualidad.jsx";
import { CrearRutina } from "./component/crearRutina";
import { PagarMensualidad } from "./component/pagarMensualidad.jsx";
import { Cambiarcontra } from "./component/cambiarcontra";
import { ModificarAlumno } from "./component/modificarAlumno.jsx";
import { HomeUsuario } from "./component/homeUsuario";
import { EditarMensualidad } from "./component/modificarMensualidades.jsx";
import { HomeAdmin } from "./component/homeAdmin";
import { Carrito } from "./component/carrito";
import { ListadoEjercicios } from "./component/listadoEjercicios.jsx";
import { EditarEjercicio } from "./component/modificarEjercicio.jsx";
import { ListaRutinaDeAlumno } from "./component/listaRutinaDeAlumno.jsx";
import { VistaEjercicio } from "./component/vistaEjercicio.jsx";
import { ListadoProductos } from "./component/listadoProductos.jsx";
import { CrearProducto } from "./component/crearProducto";
import { EditarProducto } from "./component/modificarProducto.jsx";
import { Producto } from "./component/producto.jsx";
import { Calendario } from "./component/calendario.jsx";

// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />

          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Planes />} path="/planes" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<CrearAlumno />} path="/crearAlumno" />
            <Route element={<ListaAlumno />} path="/listaAlumno" />
            <Route element={<VistaProducto />} path="/vistaProducto/:theid" />
            <Route element={<CrearEjercicio />} path="/crearEjercicio" />
            <Route
              element={<EditarEjercicio />}
              path="/editarEjercicio/:theid"
            />
            <Route element={<VistaEjercicio />} path="/vistaEjercicio/:theid" />
            <Route element={<Log_in />} path="/login" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<MisPagos />} path="/mispagos/:theid" />
            <Route
              element={<PagarMensualidad />}
              path="/pagarMensualidad/:theid"
            />
            <Route element={<VistaMensualidades />} path="/mensualidades" />
            <Route element={<VerEjercicio />} path="/verEjercicios" />
            <Route element={<Alumno />} path="/alumno/:theid" />
            <Route element={<CrearMensualidad />} path="/crearMensualidad" />
            <Route
              element={<CrearRutina />}
              path="/crearRutina/:theid/:idAlumno"
            />
            <Route element={<Cambiarcontra />} path="/cambiarcontra" />
            <Route
              element={<ModificarAlumno />}
              path="/modificarAlumno/:theid"
            />
            <Route element={<HomeUsuario />} path="/homeUsuario" />
            <Route
              element={<EditarMensualidad />}
              path="/editarMensualidad/:theid"
            />
            <Route element={<HomeAdmin />} path="/homeAdmin" />
            <Route element={<Carrito />} path="/carrito/:theid" />
            <Route element={<ListadoEjercicios />} path="/ListadoEjercicios" />
            <Route
              element={<ListaRutinaDeAlumno />}
              path="/ListaRutinaDeAlumno/:theid"
            />
            <Route element={<ListadoProductos />} path="/ListadoProductos" />
            <Route element={<CrearProducto />} path="/crearProducto" />
            <Route element={<EditarProducto />} path="/editarProducto/:theid" />
            <Route element={<Producto />} path="/producto/:theid" />
            <Route element={<Calendario />} path="/calendario" />
            <Route element={<QuienesSomos />} path="/quienessomos" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
