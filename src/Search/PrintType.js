import React from "react";




class PrintType extends React.Component {
  
  render() {
    
    const printType = this.props.store.items.map(item => item.saleInfo.isEbook)//.toString();
    console.log(printType)

    
    

    function eBook (){ if (printType === "True") {
      return "Ebook"}
    } 
    
    console.log(eBook)

    
    
    return (
     <form>
        <label htmlFor="PrintType">Print Type</label>
        <select 
        id="Print Type" 
        name="Print Type"
        //onChange={e => this.changeSelection(e.target.value)}
        >
          <option value="No filter">All</option>
          <option>{printType}</option>
        </select>
      </form>
    );      
    }
    }

 


    
    export default PrintType;

    