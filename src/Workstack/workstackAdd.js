import React, { useState } from 'react';
import './workstackAdd.css';



const WorkstackAdd = ({ onAdd, onCancel }) => {
    const [newData, setNewData] = useState({
        Date: '',
        sNo: '',
        rtcId: '',
        cdNumber: '',
        projectName: '',
        Application: '',
        pjCode: '',
        cost: '',
        IAEffort: '',
        December_2022: '',
        January_2023: '',

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
            Application: '',
            pjCode: '',
            cost: '',
            IAEffort: '',
            December_2022: '',
            January_2023: '',

        });
    };

    return (

        <div className="modal">
            <div className="modal-content">
                <h3>Add New workstack Data</h3>
                <form>
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            name="Date"
                            value={newData.Date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>sNo</label>
                        <input
                            type="text"
                            name="sNo"
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
                        <label>cdNumber</label>
                        <input
                            type="text"
                            name="cdNumber"
                            value={newData.cdNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>projectName</label>
                        <input
                            type="text"
                            name="cdNumber"
                            value={newData.projectName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Application</label>
                        <input
                            type="text"
                            name="validity"
                            value={newData.Application}
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
                    <div className="form-actions">
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WorkstackAdd;