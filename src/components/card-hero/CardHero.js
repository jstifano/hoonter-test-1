import React from 'react';
import './CardHero.css';

/**
 * Component para mostrar la carta del heroe con su info
 * @param props.image Imagen del héroe
 * @param props.name Nombre del héroe
 * @param props.description Descripción del héroe
 */
const CardHero = (props) => {
    return (
        <div className="card">
            <div>
                <img src={props.image} alt="heroe" width="481" height="390"/>
            </div>
            <div style={{paddingLeft: 10}}>
                <h2>{props.name}</h2>
            </div>
            <div style={{width: 470}}>
                <p style={{textAlign: 'justify', paddingLeft: 10}}>{props.description}</p>
            </div>
        </div>
    )
}

export default CardHero;