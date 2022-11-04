import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import {VerEjercicio} from "../component/verEjercicios.jsx";
// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LAS MENSUALIDADES //
// /////////////////////////////////////////

export const EjerciciosTodos = () => {

    let {store, actions} = useContext(Context)


    return (
        <>


            <div>
                <Cuerpo title="Ejercicios"
                    obj={
                        store.ejercicios
                    }/>
                <br/></div>
        </>
    )
}
