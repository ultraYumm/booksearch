
import React from "react";
class Category extends React.Component {

  

  
render() {

  

const items = this.props.store.items.filter(item => item.volumeInfo.categories);
const categoriesWithDuplicatesArray = items.map(item => {
  return item.volumeInfo.categories[0]
}) 
const removedDuplicatesArray = categoriesWithDuplicatesArray.filter((item, index) => {
  return categoriesWithDuplicatesArray.indexOf(item) === index
})
const categories = removedDuplicatesArray.map(item => {
    return (
    <option>{item}</option>
  )
})  
function changeSelection(value) {
  if (value === "None") {
    this.props.changeHandler(null);
  } else {
    const catSelected = this.categories.find(catSelected => catSelected === value);
    this.props.changeHandler(catSelected);
    
  }
}


console.log(categories)

return (
 <form>
    <label htmlFor="category">Category</label>
    <select 
    id="category" 
    name="category"
    onChange={e => this.changeSelection(e.target.value)}
    >
      <option value="No filter">No filter</option>
      {categories}
    </select>
  </form>
);      
}
}
export default Category;
