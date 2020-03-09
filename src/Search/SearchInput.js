import React from "react";




class SearchInput extends React.Component {


 
    
  render() {
    
        return (
          <form>
          <label htmlFor="Search">Search</label>
          <input 
          type="text" 
          placeholder="henry" 
          required id= "search"
          value = {this.props.value}
          onChange = {event => this.props.searchOnChange(event)}
    
          
          
          />
          <button type="submit"
          onClick={this.props.handleSearch}
          
          >Search</button>
        </form>
        );
      }

    }

    
    export default SearchInput;
