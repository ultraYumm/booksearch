import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import SearchBox from './Search/SearchBox';
import BookList from './BookList';

//import Stringify from 'react-stringify';
 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     store: null,
     selected: null,
     searchValue: "",
        };
    //this.handleSearch = this.handleSearch.bind(this);
    //this.searchOnChange = this.searchOnChange.bind(this);
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }
  

  makeApiCall = searchInput => {
    var searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({store: data})
        console.log(searchUrl)

      });
  }
  
  

  handleSearch = (searchValue) => {
    this.makeApiCall(searchValue)
    }

  render() {
    
    const store = this.state.store

   // const value = this.state.searchValue
    
    const key = store && store.items && store.items.map(item =>
      (item.id))
    
    
    return (
      
      <main className="App">
       <header><Header /></header>
    
       <div>
       <SearchBox
      store = {store}
      key = {key}
      changeHandler={selected => this.setSelected(selected)}
      handleSearch ={this.handleSearch}
      />
       
       </div>
    
       <div>
       {store &&
        store.items &&
        store.items.map(item => <BookList item={item} />)}
   
          
        </div>
       
       
      </main>
    );
    }
    }
    
    export default App;
    
    