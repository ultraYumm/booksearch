import React from "react";




class PrintType extends React.Component {
  
  render() {
    const printType = this.props.store.items.map(item =>
            <option value={item.saleInfo.isEbook} key={item.id}>{item.saleInfo.isEbook}</option>
          )

    function eBook ({printType}) {
      if ({printType}==="true") {return "Yes";
    } else {return "No"}

    }
              
            ;
    return (
       <form>
          <label htmlFor="printType">Print Type</label>
          <select id="printType" name="printType">
            <option value="All">All</option>
            {printType}
          </select>
        </form>
    );      
  }
}

 

/*PrintType.defaultProps = {
  countries: []
};*/


    
    export default PrintType;

    