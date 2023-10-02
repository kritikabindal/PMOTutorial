import IAActualsGrid from './IAActualsGrid'; // Import your IAActualsGrid component
import React, { useState, useEffect } from 'react';
import IAActualsEdit from './IAActualsEdit';
import IAActualsDelete from './IAActualsDelete';
import readXlsxFile from 'read-excel-file'
import ExcelJS from 'exceljs';



const IAActuals = () => {
    const initialData = loadFromLocalStorage() || { rtcId: '', cdNumber: '', validity: '', projectName: '' };
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [data, setData] = useState([])
    const [selectedFile, setSelectedFile] = useState();


    useEffect(() => {
        if (selectedFile) {
            readXlsxFile(selectedFile).then((rows) => {
                console.log('KW101', rows)
                const newData = rows.map(item => ({ 'Date': item[0], 'sNo': item[1], 'rtcId': item[2], 'cdNumber': item[3], 'project name': item[4] }))
                setData(newData)
                // `rows` is an array of rows
                // each row being an array of cells.
            })
        }

    }, [selectedFile])

    // Dummy data

    const handleEdit = async (item) => {
        // Handle edit logic here
        // const workbook = new ExcelJS.Workbook();
        // await workbook.xlsx.readFile(selectedFile);
      
        // // Get the first sheet in the file
        // const sheet = workbook.getWorksheet(1);
      
        // // Update the data in the sheet
        // sheet.getCell('A1').value = "hello";
      
        // // Save the changes to the file
        // await workbook.xlsx.writeFile(selectedFile);
        // setEditData(item);
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

    const handleDelete = () => {
        //   // Handle delete logic here
        setDeleteData();
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
                <IAActualsEdit data={editData} onSave={handleSave} onCancel={() => setEditData(null)} onDelete={() => { }} />
            )}

            {deleteData && (
                <IAActualsDelete data={data} onCancel={handleCancel} />
            )}

        </div>
    );
};

export default IAActuals;