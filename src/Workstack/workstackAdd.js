import React, { useState } from 'react';
import './workstackAdd.css';


const WorkstackAdd = ({ onAdd, onCancel }) => {
    const [newData, setNewData] = useState({
        rtcId: '',
        cdNumber: '',
        validity: '',
        projectName: '',
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
            rtcId: '',
            cdNumber: '',
            validity: '',
            projectName: '',
        });
    };

    return (

        <div className="modal">
            <div className="modal-content">
                <h3>Add New workstack Data</h3>
                <form>
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
                        <label>Validity</label>
                        <input
                            type="text"
                            name="validity"
                            value={newData.validity}
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