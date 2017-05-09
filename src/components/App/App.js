import React, { Component } from 'react';
import './App.css';
import {Controls} from '../Controls/Controls'
import {SideBar} from '../SideBar/SideBar'
import {Favorites} from '../Favorites/Favorites'
import {CardDisplay} from '../CardDisplay/CardDisplay'
import DataScrubbers from '../DataScrubbers/DataScrubbers'

class App extends Component {
  constructor() {
    super()
    this.dataScrubber = new DataScrubbers()
    this.state = {
      quotes: [],
      people: {},
      planets: {},
      vehicles: {}
    }
  }

  componentWillMount() {
    this.getScrollingQuote()
  }

  getScrollingQuote() {
    fetch('http://swapi.co/api/films')
    .then((resp) => resp.json())
    .then((data) => {
    this.setState({ quotes: this.dataScrubber.scrubQuotes(data) })
    })
  }

  getPeople() {
    fetch('http://swapi.co/api/people')
    .then((resp) => resp.json())
    .then((data) => {
    this.setState({ people: this.dataScrubber.scrubPeople(data) })
    })
  }

  getPlanets() {
    fetch('http://swapi.co/api/planets/')
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ planets: this.dataScrubber.scrubPlanets(data) })
    })
  }

  getVehicles() {
    console.log('fired')
    fetch('http://swapi.co/api/vehicles/')
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ vehicles: this.dataScrubber.scrubVehicles(data) })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Swapi-Box</h1>
        <Controls
          getPeople={this.getPeople.bind(this)}
          getVehicles={this.getVehicles.bind(this)}
          getPlanets={this.getPlanets.bind(this)}/>
        <SideBar quotes={this.state.quotes}/>
        <Favorites />
        <CardDisplay />
      </div>
    );
  }
}

export default App;
