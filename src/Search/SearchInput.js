import React from "react";




class SearchInput extends React.Component {


searchOnChange = (e) => {
    e.preventDefault()
    this.props.handleSearch(e.target.searchValue.value)
    this.setState({ searchValue: e.target.searchValue.value});
    }
 
    
  render() {
    

        return (
          <form onSubmit = {this.searchOnChange}>
          <label htmlFor="Search">Search</label>
          <input 
          type="text" 
          placeholder="henry" 
          required id= "search"
          name = 'searchValue'
          
          />
          <button type="submit"
                
          >Search</button>
        </form>
        );
      }

    }

    
    export default SearchInput;
