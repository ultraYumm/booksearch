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
     store: [],
     selected: null
     //searchValue: '',
    };
  }

  /*setSelected(selected) {
    this.setState({
      selected
    });
  }*/
    
  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({store: data})

      });
  }
  
  /*handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
    };*/

  render() {
    
    const store = this.state.store

    //const value = this.state.searchValue
    
    const key = store && store.items && store.items.map(item =>
      (item.id))
    
    const printType = store && store.items && store.items.map(item =>
        (item.saleInfo.isEbook))//.toString()
      
    const category = store && store.items && store.items.map(item =>
      (item.volumeInfo.categories))//.toString()
   
      //console.log(items)

    return (
      
      <main className="App">
       <header><Header /></header>
    
       <div>
       <SearchBox
      store = {store}
      key = {key}
      printType = {printType}
      category = {category}
      //changeHandler={selected => this.setSelected(selected)}
      //value = {value}
      //handleOnChange = {this.handleOnChange}
      />
       
       </div>
    
       <div>
          {store && store.items && store.items.map(item =>(
             <BookList
             key = {item.id}
             title = {item.volumeInfo.title}
             author = {item.volumeInfo.authors}
             //price = {item.saleInfo.retailPrice.amount}
             //price = {JSON.stringify(item.saleInfo.retailPrice.amount)}
             image = {item.volumeInfo.imageLinks.thumbnail}
             description = {item.volumeInfo.description}
             preview = {item.volumeInfo.previewLink}
             />
    
          ))}        
          
        </div>
       
       
      </main>
    );
    }
    }
    
    export default App;