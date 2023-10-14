import React from "react";
import ReactDOM from "react-dom";

import searchStyles from "./Search.module.css";
import SearchOverlay from "./SearchOverlay";

const Search = ({setFlag, isFilterClicked}) => {
  
    const handleClick = () => {
        setFlag(true);
    }


    const BACKDROP_STYLING = {
    position: "absolute",
    top : 0,
    bottom: 0,
    left: 0,
    right: 0,
background: "rgba(0,0,0,0.2)",
zIndex: 2
    }
   
    
const handleOverLayClick = () => {
    
}
  
 if(!isFilterClicked) {
    return <SearchOverlay className={searchStyles.search} onClick={handleClick}/>;
 }
    return (
        <>
        {ReactDOM.createPortal(<div style={BACKDROP_STYLING}></div>, document.getElementById("backdrop-root"))}
        { ReactDOM.createPortal(<SearchOverlay className={searchStyles.searchNew} onClick={handleOverLayClick}/>,document.getElementById("search-root"))}
        </>
    )
}

export default Search;