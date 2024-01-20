/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from "react";
import Main from "../template/Main";
// Importar o Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';



export default props =>
    <Main icon="home" title="Início" subtitle=" Segundo projeto do capitulo de react">
        <div className='display-4'>  Bem vinda! </div>
        <hr/>
        <p className='mb-0'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit. Placeat, eum.
        </p>
    </Main>