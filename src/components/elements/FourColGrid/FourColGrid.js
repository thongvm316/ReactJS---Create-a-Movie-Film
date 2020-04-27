import React from 'react';
import './FourColGrid.css'

const FourColGrid = (props) => {
    // console.log(props.children);
    const renderElements = () => {
        const gridElements = props.children.map((element, i) => {
            // console.log(element);
            return (
                <div key={i} className="rmdb-grid-element">
                    {element}
                </div>
            )
        });
        // console.log(gridElements);
        return gridElements
    }

    return (
        <div className="rmdb-grid">
            {/* {props.header && !props.loading ? <h1>{props.header}</h1> : null} */}
            <h1>{props.header}</h1>
            <div className="rmdb-grid-content">
                {renderElements()}   
            </div>    
        </div>
    )
}

export default FourColGrid;