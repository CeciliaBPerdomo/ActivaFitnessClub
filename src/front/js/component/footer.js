import React, {Component} from "react";
import logo from "../../img/wpp.jpg.png"
import {Link} from "react-router-dom"


export const Footer = () => (
    <footer className="bg-dark text-center text-white">
        <div>
            <p>Dirección : Colonia del Sacramento-Fosalba 674
            </p>

            <button><img className="center rounded"
                    src={logo}
                    style={
                        {
                            maxWidth: "30px",
                            maxHeigth: "30px"
                        }
                    }
                    onClick={
                        () => (window.location.href = "https://api.whatsapp.com/send?phone=59899387921")
                    }/>

            </button>


        </div>
    </footer>
);
