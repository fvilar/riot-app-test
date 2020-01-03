import React, { Fragment } from 'react';
import './Componente.css';
import axios from 'axios';


export default class Componente extends React.Component {
  state = {
    persons:Object,
    icon:String
  }

    consulta(){
        axios.get("https://cors-anywhere.herokuapp.com/https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/DubstepKnight?api_key="+process.env.REACT_APP_KEY)
      .then(res => {
        const persons = res.data;        
        this.setState({ persons ,icon:"http://ddragon.leagueoflegends.com/cdn/9.24.2/img/profileicon/"+persons.profileIconId+".png"});
        console.log(persons);
      })
    }
  componentDidMount() {
    this.consulta();    
    setInterval(()=>this.consulta(),5000);
}

  render() {
    return (
    <ul>
        <img src={this.state.icon}></img>
        <li><h1>{this.state.persons.name}</h1></li>
        <li><h2>{this.state.persons.summonerLevel}</h2></li>        
    </ul>
    )
  }
}