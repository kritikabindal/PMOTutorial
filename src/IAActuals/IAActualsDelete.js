IAActualsDelete.js


// import React from 'react';
// import './IAActualsDelete.css'; 

// const IAActualsDelete = ({ data, onDelete, onCancel }) => {
//   const handleDelete = () => {
//     onDelete(data);
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h3>Confirm Deletion</h3>
//         <p>Are you sure you want to delete this record?</p>
//         <div className="modal-actions">
//           <button onClick={handleDelete}>Delete</button>
//           <button onClick={onCancel}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IAActualsDelete;
import React from 'react';

const IAActualsDelete = ({ data, onDelete }) => {
    const handleDelete = () => {
        onDelete(data.id);
    };

    return (
        <div>
            <h3>Delete Data</h3>
            <p>Are you sure you want to delete this data?</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default IAActualsDelete;