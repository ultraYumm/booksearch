import React from "react";




class SearchInput extends React.Component {

    
  render() {
    
        return (
          <form>
          <label htmlFor="Search">Search</label>
          <input type="text" required placeholder="henry" required id= "Search"/>
          <button type="submit">Search</button>
        </form>
        );
      }

    }

    
    export default SearchInput;
/*
    <form>
      <label htmlFor="Search">Search</label>
      <input type="text" required placeholder="Search" required id= "Search"/>
      <button type="submit">Search</button>
    </form>*/
         