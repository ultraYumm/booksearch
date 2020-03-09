import React from "react";
import "./App.css";
import "./BookList.css";



class BookList extends React.Component {

    
  render() {

    const item = this.props.item;
    console.log("ITEM:", item);

    
        return (
        <ul className="bookSummary">            
        <li className="title">
        
        {item.volumeInfo.title && (<li>{this.props.item.volumeInfo.title}</li>)}
        
        {item.volumeInfo.authors && (<li>{item.volumeInfo.authors[0]}</li>)}
        
        {item.saleInfo.retailPrice && (<li>{item.saleInfo.retailPrice.amount}</li>)}
        
         {item.volumeInfo.imageLinks && item.volumeInfo.previewLink && item.volumeInfo.description &&(<li><img src={this.props.item.volumeInfo.imageLinks.thumbnail} alt="Cover" /><a href={this.props.item.volumeInfo.previewLink} title="Click for further details">{this.props.item.volumeInfo.description}</a></li>)}
         
        </li>
        </ul>

        );
      }

    }

    


export default BookList;



 //title = {item.volumeInfo.title}
             //author = {item.volumeInfo.authors}
             //price = {item.saleInfo.retailPrice.amount}
             //price = {JSON.stringify(item.saleInfo.retailPrice.amount)}
             //image = {item.volumeInfo.imageLinks.thumbnail}
             //description = {item.volumeInfo.description}
             //preview = {item.volumeInfo.previewLink}