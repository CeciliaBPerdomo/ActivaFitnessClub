import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Alumno = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1>
        <i className="fa fa-user"></i> Alumno:
      </h1>
    </>
  );
};
