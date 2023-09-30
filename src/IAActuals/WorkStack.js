import IAActualsGrid from './IAActualsGrid'; // Import your IAActualsGrid component
import React, { useState, useEffect } from 'react';
import IAActualsEdit from './IAActualsEdit';
import IAActualsDelete from './IAActualsDelete';

const dummyWorksData = [
    {
        id: 1,
        rtcId: 'RTC012',
        cdNumber: 'CD021',
        validity: 'Valid',
        projectName: 'Project C',
    },
    {
        id: 2,
        rtcId: 'RTC002',
        cdNumber: 'CD002',
        validity: 'Invalid',
        projectName: 'Project D',
    },
    // Add more objects with sample data as needed
];


useEffect(() => {
    if (selectedFile) {
        readXlsxFile(selectedFile).then((rows) => {
            console.log('KW101', rows)
            const newData = rows.map(item => ({ 'Date': item[0], 's.no': item[1], 'RTC ID': item[2], 'CDnumber': item[3], 'Project name': item[4], 'application': item[5], 'PJCode': item[6], 'cost': item[7], 'IA Effort': item[8] }))
            setData(newData)
            // `rows` is an array of rows
            // each row being an array of cells.
        })
    }

}, [selectedFile])

const Workstack = () => {
    const initialData = loadFromLocalStorage() || { rtcId: '', cdNumber: '', validity: '', projectName: '' };
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [data, setData] = useState(dummyWorksData)

    const handleEdit = (item) => {
        // Handle edit logic here
        setEditData(item);
    };

    // Define the onSave function
    const handleSave = (editData) => {
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

    return (
        <div>
            <h2>IA Actuals</h2>
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

export default Workstack;