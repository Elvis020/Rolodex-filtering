import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/SearchBox.component'
import './App.css';




class App extends Component {
  constructor() {
    super();


    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userAlias => this.setState({
        monsters: userAlias
      }))
  }


  // Writing a handler arrow 😻function 
  handleChange = (e) => {
      this.setState({searchField: e.target.value})
    }

  render() {
    // For filtering
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monst => 
      monst.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox 
        placeholder="Search monster...🤑"
        handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
