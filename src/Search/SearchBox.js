import React from "react";
import "./Search.css";
import SearchInput from './SearchInput';
import Category from './Category';
import PrintType from './PrintType';


class SearchBox extends React.Component {


    
  render() {
    
    const item = this.props.item;
    console.log("ITEM:", item);
    

        return (
         <div>
              <div className="searchBox">
        
                <SearchInput
                 value = {this.props.value}
                 searchOnChange = {this.props.searchOnChange}
                 handleSearch = {this.props.handleSearch}
                />
                </div>
               
               <div className="typeBox">
               {this.props.store &&
               <PrintType
                 key = {this.props.key}
                 store = {this.props.store}
                 changeHandler = {this.props.changeHandler}

                 />}</div>

              <div className="typeBox">
              {this.props.store &&
              <Category
                  key={this.props.key}
                  store={this.props.store}
                  changeHandler = {this.props.changeHandler}

                />}</div>
        
         </div>
        )
  }
}

export default SearchBox;

