import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import SearchBox from './Search/SearchBox';
import BookList from './BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header /> 
        <SearchBox 
          /*updateFeature = {this.updateFeature}
          selected = {this.state.selected}*//>
          <BookList 
          /*selected = {this.state.selected}*/
          />
      </div>
    );
  }
}

export default App;

