import React, {Component} from 'react';
import api from '../../component/service/api';
import axios from 'axios';
import './style.css'


export default class Main extends Component{
    state = {
        res: [],
    };
    componentDidMount(){
        this.loadResults()
    };

    loadResults = async() => {
        const response = await axios.get('http://rickandmortyapi.com/api/character')
        
        const person = response.data.results
        this.setState({res: person})

    };

    render(){
        const watch = 'https://www.minhaserie.com.br/serie/1420-rick-and-morty';
        const {res} = this.state;
        return(
            <div className="person-list">
               { res.map(res => (
                <article key="res_id">
                <img src={res.image} alt =""></img>
                <h2>{res.name}</h2>
                <p>{res.gender}</p>
                <p>{res.status}</p>
                <p>{res.species}</p>
                <a href={watch} target="blank">Assistir</a>   
                </article> 

                ))}
            </div>
        )

    }
}