import React from "react";
import "./App.css";
import "./BookList.css";



class BookList extends React.Component {

    
  render() {
    
        return (
        <ul className="bookSummary">            
        <li className="title">Title</li>
        <li>Author</li>
        <li>Price:</li>
        <li><img src="" alt="Cover image" /><a href="http://www.google.com" title="Click for further details">Description</a></li>
         </ul>

        );
      }

    }

    


export default BookList;

