import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Alumno = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.obtenerAlumnoId(parseInt(params.theid));
  }, []);

  console.log(store.alumno);

  return (
    <>
      <div>
        <h1>
          <i className="fa fa-user"></i> Alumno: {store.alumno.name}
        </h1>
      </div>
    </>
  );
};
