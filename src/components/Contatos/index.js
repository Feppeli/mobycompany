import React from "react";
import '../Contatos/index.css'

const Contatos = () => {
    return (
        <section id="contatos">
            <div id='lancamento'>
                <h2>Vamos lançar esse<br /> foguete?</h2>
                <a id="botaoLancamento" href="https://contate.me/mobycompany">Comece um projeto</a>
            </div>

            <h3>Contatos</h3>
            <hr></hr>
            <div id="i">
                <a href=".">
                    <i class="fa-brands fa-whatsapp fa-2x"></i>&nbsp; (81) 98138-9973
                </a>

                <a href=".">
                    <i class="fa-brands fa-instagram fa-2x" ></i> &nbsp; @mobycomapny
                </a>

                <a href=".">
                    <i class="fa-solid fa-envelope fa-2x"></i>&nbsp; mobycompanybr@gmail.com
                </a>

            </div>
        </section>
    )
}

export default Contatos;
