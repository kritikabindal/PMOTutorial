// IAActualsEdit.js

import React, { useState } from 'react';
import './workstackEdit.css';

const WorkstackEdit = ({ data, onSave, onCancel }) => {
    const [editedData, setEditedData] = useState(data);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({
            ...editedData,
            [name]: value,
        });
    };

    const handleSave = () => {
        onSave(editedData); // Call onSave callback with the edited data
    };

    // console.log('KW101', editedData)
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Edit IA Actuals Data</h3>
                <form>
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            name="Date"
                            value={data.Date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>sNo</label>
                        <input
                            type="text"
                            name="sNo"
                            value={data.sNo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>RTC ID</label>
                        <input
                            type="text"
                            name="rtcId"
                            value={data.rtcId}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>cdNumber</label>
                        <input
                            type="text"
                            name="cdNumber"
                            value={data.cdNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>projectName</label>
                        <input
                            type="text"
                            name="cdNumber"
                            value={data.projectName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Application</label>
                        <input
                            type="text"
                            name="validity"
                            value={data.Application}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>pjCode</label>
                        <input
                            type="text"
                            name="pjCode"
                            value={data.pjCode}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button onClick={()=>{}}>Add</button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WorkstackEdit;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const IAActualsEdit = ({ data, onSave }) => {
//   const [editedData, setEditedData] = useState(data);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData({ ...editedData, [name]: value });
//   };

//   const handleSave = () => {
//     onSave(editedData);
//   };

//   return (
//     <div>
//       <h3>Edit Data</h3>
//       <input
//         type="text"
//         name="property1"
//         value={editedData.property1}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         name="property2"
//         value={editedData.property2}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSave}>Save</button>
//       <Link to="/ia-actuals">Back to IA Actuals</Link>
//     </div>
//   );
// };

// export default IAActualsEdit;