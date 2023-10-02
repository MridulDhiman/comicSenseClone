import React from "react";

import filterStyles from "./Filters.module.css";

const Filters = () => {
    return (
        <ul className={filterStyles.filterList}>
            <li>TOP CATEGORIES <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg></li>
            <li>SHOP BY PRODUCT <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg></li>
            <li>SHOP BY ANIME <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg></li>
            <li>COMBOS</li>
            <li>CLEARANCE SALE</li>
        </ul>
    )
}

export default Filters;