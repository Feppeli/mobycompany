import React from "react";
import '../Servicos/Servicos.css'
import Svg from '../imgs/prog.svg'

const Servicos = () => {
    return (
        <section id="servicos">
            <div>
                <h3>Serviços</h3>
                <hr></hr>
                <h2>Desenvolvimento de web. Sites institucionais e landing pages de alta conversão.</h2>
            </div>
            <div id="img">
                <img alt="" src={Svg}></img>
            </div>


        </section>
    );
};

export default Servicos;