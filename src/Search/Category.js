import React from "react";




class Category extends React.Component {

    
  render() {
    const category = this.props.store.items.map(item =>
            <option value={item.volumeInfo.categories} key={item.id}>{item.volumeInfo.categories}</option>
          );
    return (
       <form>
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="No filter">No filter</option>
            {category}
          </select>
        </form>
    );      
  }
}


Category.defaultProps = {
  countries: []
};
    


export default Category;


               