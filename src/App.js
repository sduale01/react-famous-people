import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import FamousForm from './Components/FamousForm.js'
import FamousList from './Components/FamousList.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      famousPeople: [],
    }
  }


  addFamousPersonToList = (famousPerson) => {
    this.setState({
      famousPeople: [...this.state.famousPeople, famousPerson]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/*  addFamousPersonToList is passed via props. */}
        <FamousForm addFamousPersonToList={this.addFamousPersonToList} />
        <FamousList addToList = {this.state.famousPeople} />
      </div>
    );
  }
}

export default App;


