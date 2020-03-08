import React from "react";




class SearchInput extends React.Component {

    
  render() {
    
        return (
          <form>
          <label htmlFor="Search">Search</label>
          <input type="text" placeholder="henry" required id= "search"/>
          <button type="submit">Search</button>
        </form>
        );
      }

    }

    
    export default SearchInput;
