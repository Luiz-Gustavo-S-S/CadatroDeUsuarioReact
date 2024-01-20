/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Header from './Header'
import './Main.css'
// Importar o Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Se você precisar usar JavaScript interativo do Bootstrap, também pode importar:
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className='content container-fluid' >
            <div className="p-3  mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

