import React from "react";
import Atom from '../imgs/atom.png'
import '../Main/Main.css'

const Main = () => {
    return(
        <main>
            <p> Design, Desenvolvimento & <br/> Consultoria</p>
            <h2>Criamos interfaces de alta conversão com as melhores tecnologias do mercado.</h2>
            <img className="spinnerAtom" alt="" src={Atom}></img>
            <a href="https://contate.me/mobycompany">Comece um projeto</a>
        </main>
    )
}

export default Main;
