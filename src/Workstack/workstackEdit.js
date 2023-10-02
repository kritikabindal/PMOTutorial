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

    console.log('KW101', editedData)
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Edit IA Actuals Data</h3>
                <form>
                    <div className="form-group">
                        <label>RTC ID</label>
                        <input
                            type="text"
                            name="rtcId"
                            value={editedData.rtcId}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>CD Number</label>
                        <input
                            type="text"
                            name="cdNumber"
                            value={editedData.cdNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Validity</label>
                        <input
                            type="text"
                            name="validity"
                            value={editedData.Date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Project Name</label>
                        <input
                            type="text"
                            name="projectName"
                            value={editedData.projectName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button onClick={handleSave}>Save</button>
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