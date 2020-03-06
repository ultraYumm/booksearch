import React from "react";
import "./App.css";
import "./BookList.css";



class BookList extends React.Component {

    
  render() {
    
        return (
        <ul className="bookSummary">            
        <li className="title">{this.props.title}</li>
        <li>{this.props.author}</li>
        <li>{this.props.price}</li>
         <li><img src={this.props.image} alt="Cover image" /><a href={this.props.preview} title="Click for further details">{this.props.description}</a></li>
         </ul>

        );
      }

    }

    


export default BookList;

