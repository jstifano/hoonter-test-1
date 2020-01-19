import React from 'react';
import './SearchInput.css';

/**
 * Componente para mostrar el campo de búsqueda
 * @param props.handleChangeText Método para setear el texto mientras escribe
 * @param props.searchHero Método para realizar la búsqueda
 */
const SearchInput = (props) => {
    return (
        <div className="wrapper-input">
            <div id="input-search">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="search" 
                    onChange={(event) => props.handleChangeText(event)}
                />
            </div>
            <div 
                className="button-search" 
                onClick={() => props.searchHero()}
            >
                <div className="icon-search"></div>
            </div>
        </div>
    )
}

export default SearchInput;