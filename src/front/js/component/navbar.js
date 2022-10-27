import React, {useContext} from "react";
import {Link} from "react-router-dom"
import {Context} from "../store/appContext";
import logo from "../../img/Logo.jpg"

export const Navbar = () => {

    let {store, action} = useContext(Context)


    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
            <div className="container-fluid">
                <div>
                    <Link to="/">
                        <img className=""
                            src={logo}
                            style={
                                {
                                    maxWidth: "100px",
                                    maxHeigth: "100px"
                                }
                            }/></Link>
                </div>


                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">


                    <button className="btn btn-ligth " type="submit">
                        <i className="bi bi-calendar3"></i>

                    </button>
                    <hr/>
                    <Link to="/">
                        <button className="btn btn-danger" type="submit">Login</button>
                    </Link>
                </div>
                <div>
                    <button className="btn btn-ligth d-flex flex-row-reverse" type="submit">
                        <i className="bi bi-question-circle"></i>
                    </button>

                </div>
            </div>
        </nav>
    );
};
