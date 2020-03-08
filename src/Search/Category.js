import React from "react";




class Category extends React.Component {

    
  render() {
    const catOptions = this.props.category.map(item =>
      <option value={this.props.category} key={this.props.category}>{this.props.category}</option>
    );
return (
 <form>
    <label htmlFor="category">Category</label>
    <select 
    id="category" 
    name="category"
    //onChange={e => this.changeSelection(e.target.value)}
    >
      <option value="No filter">No filter</option>
      {catOptions}
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
            
             /* return (
                <form>
                  <label htmlFor="category">Category</label>
                  <select 
                  id="category" 
                  name="category"
                  //onChange={e => this.props.changeSelection(e.target.value)}
                  >
                   <option value="No filter">No filter</option>
                   {this.props.category}
                   </select>
                </form>
              );
          }
    
        }*/
    