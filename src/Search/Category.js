import React from "react";




class Category extends React.Component {

    
  render() {
    
        return (
            <form>
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
               <option value="No filter">No filter</option>
               {this.props.category}
               </select>
            </form>
          );
      }

    }

    


export default Category;


               /* <select
                id="country"
                name="country"
                onChange={e => this.changeSelection(e.target.value)}>
                <option value="No filter"></option>
                {options}
              </select> */
            