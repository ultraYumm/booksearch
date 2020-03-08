import React from "react";
import "./Search.css";
import SearchInput from './SearchInput';
import Category from './Category';
import PrintType from './PrintType';


class SearchBox extends React.Component {

    
  render() {

        return (
         <div>
              <div className="searchBox">
                <SearchInput/>
                </div>
              <div className="typeBox">
                <PrintType
                key = {this.props.key}
                store = {this.props.store}
                items = {this.props.items}
                printType = {this.props.printType}
                /></div>
              <div className="typeBox">
               <Category
               key = {this.props.key}
               store = {this.props.store}
               items = {this.props.items}
               category = {this.props.category}
                /></div>
         </div>
        )
  }
}

export default SearchBox;

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