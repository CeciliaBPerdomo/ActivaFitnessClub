import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ModificarAlumno = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1>Hola!</h1>
    </>
  );
};
