import React from 'react';
import baleia from '../imgs/baleia.png'
import '../Nav/Nav.css'

const Nav = () => {
    return (
        <nav>
            <div id='logo'>
                <img id='baleia' alt="" src={baleia}></img>
                <h1>Moby</h1>
                <h5>Company</h5>
            </div>
            <div id='navigation'>
                <div>
                    <a href='.'>Quem Somos</a>
                    <a href='.'>Serviços</a>
                    <a href='.'>Contatos</a>
                </div>


                <button><i class="fa-solid fa-bars-staggered fa-2x"></i></button>
            </div>
        </nav>
    )
}

export default Nav;