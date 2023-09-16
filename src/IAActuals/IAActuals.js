// import React, { useState } from 'react';
// import IAActualsGrid from './IAActualsGrid';
// import IAActualsEdit from './IAActualsEdit';
// import IAActualsDelete from './IAActualsDelete';
// import IAActualsReport from './IAActualsReport';
// import IAActualsSearch from './IAActualsSearch';
// import IAActualsAdd from './IAActualsAdd';
// import './IAActuals.css'; 

// const IAActuals = () => {
//   const [selectedOption, setSelectedOption] = useState('');
// const [editData, setEditData] = useState(null);
// const [deleteData, setDeleteData] = useState(null);
//   const [generateReport, setGenerateReport] = useState(false);

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleEdit = (data) => {
//     setEditData(data);
//   };

//   const handleDelete = (data) => {
//     setDeleteData(data);
//   };

//   const handleGenerateReport = () => {
//     setGenerateReport(true);
//   };

//   const handleCancel = () => {
//     setEditData(null);
//     setDeleteData(null);
//     setGenerateReport(false);
//   };

//   return (
//     <div className="ia-actuals-container">
//       <h2>IA Actuals</h2>
//       <label>Select an option:</label>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Select an option</option>
//         <option value="viewEdit">View/Edit Data</option>
//         <option value="delete">Delete Data</option>
//         <option value="generateReport">Generate Report</option>
//         <option value="search">Search by CD Number</option>
//         <option value="addNew">Add New Record</option>
//       </select>

//       {selectedOption === 'viewEdit' && (
//         <IAActualsGrid onEdit={handleEdit} onDelete={handleDelete} />
//       )}

//       {selectedOption === 'delete' && (
//         <IAActualsDelete data={deleteData} onCancel={handleCancel} />
//       )}

//       {selectedOption === 'generateReport' && (
//         <IAActualsReport generateReport={generateReport} onCancel={handleCancel} />
//       )}

//       {selectedOption === 'search' && <IAActualsSearch />}

//       {selectedOption === 'addNew' && (
//         <IAActualsAdd onCancel={handleCancel} />
//       )}

// {editData && (
//   <IAActualsEdit data={editData} onCancel={handleCancel} />
// )}

// {deleteData && (
//   <IAActualsEdit data={deleteData} onCancel={handleCancel} />
// )}
//     </div>
//   );
// };

// export default IAActuals;

import IAActualsGrid from './IAActualsGrid'; // Import your IAActualsGrid component
import React, { useState, useEffect } from 'react';
import IAActualsEdit from './IAActualsEdit';
import IAActualsDelete from './IAActualsDelete';

const IAActuals = () => {
    const initialData = loadFromLocalStorage() || { rtcId: '', cdNumber: '', validity: '', projectName: '' };
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    // Dummy data
    const dummyIAActualsData = [
        {
            id: 1,
            rtcId: 'RTC001',
            cdNumber: 'CD001',
            validity: 'Valid',
            projectName: 'Project A',
        },
        {
            id: 2,
            rtcId: 'RTC002',
            cdNumber: 'CD002',
            validity: 'Invalid',
            projectName: 'Project B',
        },
        // Add more objects with sample data as needed
    ];

    const handleEdit = (item) => {
        // Handle edit logic here
        setEditData(item);
    };

    // Define the onSave function
    const handleSave = (editData) => {
        // Implement the logic to save the edited data here
        // setEditData(item);
        // saveToLocalStorage(editData);
        // Update the state with the edited data
        setEditData(editData);
    };

    const handleDelete = (item) => {
        //   // Handle delete logic here
        setDeleteData(item);
    };
    const handleCancel = (item) => {
        // Handle delete logic here
        // onDelete(item);
    };



    function loadFromLocalStorage() {
        const savedData = localStorage.getItem('editedData');
        return JSON.parse(savedData);
    }

    // Save data to local storage
    function saveToLocalStorage(data) {
        localStorage.setItem('editedData', JSON.stringify(data));
    }

    // useEffect(() => {
    //   // Load data from local storage when the component mounts
    //   const savedData = loadFromLocalStorage();
    //   if (savedData) {
    //     setEditedData(savedData);
    //   }
    // }, []);

    return (
        <div>
            <h2>IA Actuals</h2>
            <IAActualsGrid data={dummyIAActualsData} onEdit={handleEdit} onDelete={handleDelete} />
            {editData && (
                <IAActualsEdit data={editData} onSave={handleSave} onDelete={()=> {}} />
            )}

            {deleteData && (
                <IAActualsDelete data={deleteData} onCancel={handleCancel} />
            )}

        </div>
    );
};

export default IAActuals;