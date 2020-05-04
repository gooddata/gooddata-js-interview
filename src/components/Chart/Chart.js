import React from "react";
import './Chart.css';

const Chart = ( props ) => {
    const { width, height, title, children } = props;

    return (
        <div className="Chart" style={{ width: width ? width : undefined}}>
            <h3 className="Chart__Title">{title}</h3>
            <div className="Chart__Graph" style={{ width: width ? width : undefined, height: height ? height : undefined }}>
                {children}
            </div>
        </div>
    )
};

export default Chart;
