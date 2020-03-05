import React from "react";




class BookType extends React.Component {

    
  render() {
    
        return (
            <form>
              <label htmlFor="country">Book Type</label>
              <select>
               <option value="No filter"></option>
               
              </select>
            </form>
          );
      }

    }

    


export default BookType;


               /* <select
                id="country"
                name="country"
                onChange={e => this.changeSelection(e.target.value)}>
                <option value="No filter"></option>
                {options}
              </select> */
            