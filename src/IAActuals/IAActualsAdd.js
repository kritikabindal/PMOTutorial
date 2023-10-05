import React, { useState } from 'react';
import './IAActualsAdd.css';




const IAActualsAdd = ({ onAdd, onCancel }) => {
    const [newData, setNewData] = useState({
        Date: '',
        sNo: '',
        rtcId: '',
        cdNumber: '',
        projectName: '',
        projectResource: '',
        pjCode: '',
        IATotals: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData({
            ...newData,
            [name]: value,
        });
    };

    const handleAdd = () => {
        onAdd(newData);
        setNewData({
            Date: '',
            sNo: '',
            rtcId: '',
            cdNumber: '',
            projectName: '',
            projectResource: '',
            pjCode: '',
            IATotals: ''
        });
    };


    return (

        <div className="modal">
            <div className="modal-content">
                <h3>Add New IA Actuals Data</h3>
                <form>
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="text"
                            name="Date"
                            value={newData.Date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>sNo</label>
                        <input
                            type="text"
                            name="s.no"
                            value={newData.sNo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>RTC ID</label>
                        <input
                            type="text"
                            name="rtcId"
                            value={newData.rtcId}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>CD Number</label>
                        <input
                            type="text"
                            name="cdNumber"
                            value={newData.cdNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Project Name</label>
                        <input
                            type="text"
                            name="projectName"
                            value={newData.projectName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>projectResource</label>
                        <input
                            type="text"
                            name="projectResource"
                            value={newData.projectResource}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>pjCode</label>
                        <input
                            type="text"
                            name="pjCode"
                            value={newData.pjCode}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>IATotals</label>
                        <input
                            type="text"
                            name="IATotals"
                            value={newData.IATotals}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default IAActualsAdd;