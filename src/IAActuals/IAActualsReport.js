import React from 'react';
import './IAActualsReport.css';
const IAActualsReport = ({ onGeneratePDF, onGenerateExcel }) => {
    return (
        <div className="ia-actuals-report">
            <h3>Generate Reports</h3>
            <button onClick={onGeneratePDF}>Generate PDF Report</button>
            <button onClick={onGenerateExcel}>Generate Excel Report</button>
        </div>
    );
};

export default IAActualsReport;