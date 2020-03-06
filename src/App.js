import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import SearchBox from './Search/SearchBox';
import BookList from './BookList';
//import Stringify from 'react-stringify';
 

class App extends Component {

  static defaultProps = {
    store: {
      items: [],
      }
  };

  render() {
    const { store } = this.props
    return (
      <main className="App">
       <header><Header /></header>

       <div><SearchBox/></div>

        <div>
          {store.items.map(item =>(
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

