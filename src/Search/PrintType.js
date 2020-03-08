import React from "react";




class PrintType extends React.Component {
  
  render() {
    
    function eBook ({printType}) {
      if ({printType}==="true") {return "Yes";
    } else {return "No"}

    }
              
        
    return (
       <form>
          <label htmlFor="printType">Print Type</label>
          <select id="printType" name="printType">
            <option value="All">All</option>
            {this.props.printType}
          </select>
        </form>
    );      
  }
}

 

PrintType.defaultProps = {
  PrintType: []
};


    
    export default PrintType;

    