import React from "react";




class Category extends React.Component {

    
render() {



const catOptions = this.props.store.items.map(item =>{
if(item.volumeInfo.categories){
item.volumeInfo.categories.map(category => category)}
})

console.log(catOptions)

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


/*const catOptions = this.props.category.map(item =>
      <option value={this.props.category} key={this.props.category}>{this.props.category}</option>
    );*/

   /*const catOptions = this.props.store && this.props.store.items && this.props.store.items.map(item =>
      (item.volumeInfo.categories))*/