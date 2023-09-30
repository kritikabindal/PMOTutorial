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
import readXlsxFile from 'read-excel-file'


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

const IAActuals = () => {
    const initialData = loadFromLocalStorage() || { rtcId: '', cdNumber: '', validity: '', projectName: '' };
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [data, setData] = useState(dummyIAActualsData)
    const [selectedFile, setSelectedFile] = useState();


    useEffect(() => {
        if (selectedFile) {
            readXlsxFile(selectedFile).then((rows) => {
                console.log('KW101', rows)
                const newData = rows.map(item => ({ 'Date': item[0], 's.no': item[1], 'rtcId': item[2], 'cdNumber': item[3], 'project name': item[4] }))
                setData(newData)
                // `rows` is an array of rows
                // each row being an array of cells.
            })
        }

    }, [selectedFile])

    // Dummy data

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
        // setEditData(editData);
        const currentData = data;
        const currentRowIndex = data.findIndex(item => item.id === editData.id);
        currentData[currentRowIndex] = editData;
        setData([...currentData])
        setEditData(null)
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

    const onFileChange = event => {

        // Update the state
        setSelectedFile(event.target.files[0]);

    };

    return (
        <div>
            <h2>IA Actuals</h2>
            <input type="file" id="input" onChange={onFileChange} />
            <IAActualsGrid data={data} onEdit={handleEdit} onDelete={handleDelete} />
            {editData && (
                <IAActualsEdit data={editData} onSave={handleSave} onDelete={() => { }} />
            )}

            {deleteData && (
                <IAActualsDelete data={deleteData} onCancel={handleCancel} />
            )}

        </div>
    );
};

export default IAActuals;