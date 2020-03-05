import React from "react";
import "./Search.css";
import SearchInput from './SearchInput';
import PrintType from './PrintType';
import BookType from './BookType';


class SearchBox extends React.Component {

    
  render() {

        return (
         <div>
              <div className="searchBox">
                <SearchInput/>
                </div>
              <div className="typeBox">
                <PrintType/></div>
              <div className="typeBox">
               <BookType/></div>
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