import React, { Component } from 'react';
import './HomeContainer.css';
import SearchInput from '../../components/search-input/SearchInput';
import axios from 'axios';
import { config } from '../../config';
import CardHero from '../../components/card-hero/CardHero';

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            heroes: []
        }
    }

    /**
     * Método para realizar la petición de búsqueda
     */
    searchHero = () => {
        if(this.state.inputValue) {
            axios.get(config.baseUrl+'/characters?limit=12&nameStartsWith='
            +this.state.inputValue+'&ts=1&apikey='+config.apiKey+'&hash='+config.hashMarvelApi)
            .then(res => {
                this.setState({
                    heroes: res.data.data.results
                })
            })
            .catch(error => {
                console.log("Errorrr", error);
            })
        }
        else {
            this.setState({
                heroes: []
            })
        }
    }

    /**
     * Método para setear el texto introducido
     * @param event Evento recibido desde el search
     */
    handleChangeText = (event) => {
        this.setState({
            inputValue: event.target.value
        })

        setTimeout(() => {
            this.searchHero();
        }, 1000)
    }

    render() {
        return (
            <div className="container">
                <SearchInput 
                    handleChangeText={this.handleChangeText}
                    searchHero={this.searchHero}
                />
                <div className="card-container" >
                   {
                        this.state.heroes.length !== 0 ?
                            this.state.heroes.map((heroe,idx)=> {
                                return <CardHero
                                    key={idx}
                                    image={heroe.thumbnail.path+'/portrait_uncanny.'+heroe.thumbnail.extension}
                                    name={heroe.name}
                                    description={heroe.description}
                                />
                            })
                        : null
                    }
                </div>
            </div>
        )
    }

}

export default HomeContainer;