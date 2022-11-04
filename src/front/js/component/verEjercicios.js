import React, {useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const VerEjercicio = () => {

    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.obtenerEjercicios();
    }, []);

    return (
        <> {/* Buscar */}
            <div>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar por nombre..."/>
            </div>

            <div className="d-flex">
                {
                store.ejercicios.map((item, id) => (
                    <div className="card"
                        style={
                            {
                                width: "25%",
                                margin: "20px",
                                borderRadius: "6px",
                                overflow: "hidden",
                                background: "#ffff",
                                boxShadow: "0px 1px 10px rgb(0, 0, 0, 0.2)",
                                cursor: "default",
                                transition: "all 400ms ease"
                            }
                    }>


                        <div className="card-body">
                            <h2 className="display-6"
                                style={
                                    {marginBottom: "15px"}
                            }>
                                <i className="fa fa-dumbbell"></i>
                                {
                                item.exercise_name
                            }</h2>
                            <img src={
                                    item.photo_exercise
                                }
                                style={
                                    {
                                        width: "100%",
                                        height: "210px"
                                    }
                                }
                                className="card-img-top"
                                alt="..."/>

                        </div>
                        <div className="card-body text-center">
                            <button type="button" className="btn btn-outline-info">
                                <i className="fa fa-eye"></i>
                            </button>
                        </div>
                    </div>
                ))
            } </div>

        </>
    )
}
