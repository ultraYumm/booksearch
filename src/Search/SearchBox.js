import React from "react";
import "./Search.css";
import SearchInput from './SearchInput';
import Category from './Category';
import PrintType from './PrintType';


class SearchBox extends React.Component {


  /*changeSelection(value) {
    if(value === "None") {
      this.props.changeHandler(null);
    } else {
      const catSelected = this.props.category.find(catSelected => catSelected === value);
      this.props.changeHandler(catSelected);
      const printSelected = this.props.printType.find(printSelected => printSelected === value);
      this.props.changeHandler(printSelected);
    }
  }*/
    
  render() {
    
    const item = this.props.item;
    console.log("ITEM:", item);

        return (
         <div>
              <div className="searchBox">
                <SearchInput
                handleOnChange = {this.props.handleOnChange}
                />
                </div>
              <div className="typeBox">
              {this.props.store &&
              <Category
                key={this.props.key}
                store={this.props.store}
                //item = {item}
                //changeSelection = {this.changeSelection}
                //category={this.props.category}
               />}</div>
         </div>
        )
  }
}

export default SearchBox;

/*<div className="typeBox">
<PrintType
key = {this.props.key}
store = {this.props.store}
//changeSelection = {this.changeSelection}
printType = {this.props.printType}
/></div>*/




/*<div className="searchBox">
<SearchInput/>

  
/*render() {
    const featureLists = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const features = FEATURES[feature];
        
        return (
            
          <FeatureList
            key = {featureHash}
            featureHash = {featureHash}
            featureTitle = {feature}
            features = {features}
            updateFeature = {this.props.updateFeature}
            selected = {this.props.selected}
          />
        );
      });

       return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
        {featureLists}
       </form>
       );
    }*/