import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './random-planet.css';

export default class RandomPlanet extends Component{
    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    constructor (){
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    };

    updatePlanet() {
        const id = 12;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render(){
        const { planet: 
                { id, name, population, rotation_period, diameter } 
            } = this.state;        
        
        return(
            <div className="random-planet jumbotron rounded d-flex">
               <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/12.jpg`} alt="img" />
                <div className="random-planet-list">
                    <h3>{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                             <span className="term">Rotation Period: </span>
                             <span>{rotation_period}</span>
                        </li>
                        <li className="list-group-item">
                             <span className="term">Diameter: </span>
                             <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}