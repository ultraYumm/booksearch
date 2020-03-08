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
    };
  }

    
  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({store: data})

      });
  }
 

  render() {
    
    const store = this.state.store

    return (
      
      <main className="App">
       <header><Header /></header>
    
       <div>
         
         <SearchBox
         store = {store}
         />
       
       
       </div>
    
        <div>
          {store && store.items && store.items.map(item =>(
             <BookList
             key = {item.id}
             title = {item.volumeInfo.title}
             author = {item.volumeInfo.authors}
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