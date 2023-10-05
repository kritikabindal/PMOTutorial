import IAActualsGrid from './IAActualsGrid'; // Import your IAActualsGrid component
import React, { useState, useEffect } from 'react';
import IAActualsEdit from './IAActualsEdit';
import IAActualsDelete from './IAActualsDelete';
import readXlsxFile from 'read-excel-file'
import * as ExcelJS from 'exceljs';
import {saveAs} from "file-saver";



const IAActuals = () => {
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [data, setData] = useState([])
    const [selectedFile, setSelectedFile] = useState();


    useEffect(() => {
        if (selectedFile) {
            readXlsxFile(selectedFile).then((rows) => {
                console.log('KW101', rows)
                // ToDo: Add respective columns
                const newData = rows.map(item => ({ 'Date': item[0], 'sNo': item[1], 'rtcId': item[2], 'cdNumber': item[3], 'projectName': item[4], 'projectResource': item[5], 'pjCode': item[6], 'IATotals': item[7] }))
                setData(newData)
                // `rows` is an array of rows
                // each row being an array of cells.
            })
        }

    }, [selectedFile])

    useEffect(() => {
        // download latest file
        // To do for downloading latest file either add button or something.
        updateExcelFile(data)
    }, [data])

    const readFile = (fileToUpload, callback) => {
        const reader = new FileReader();
        let data;
        return new Promise((resolve) => {
            reader.onload = function () {
               data = reader.result;
               resolve(data);
            }
            reader.readAsArrayBuffer(fileToUpload);
        });
     }

    const updateExcelFile = async (data = []) => {
        if (selectedFile) {
            const fileData = await readFile(selectedFile);
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(fileData);
    
            // // Get the first sheet in the file
            const sheet = workbook.getWorksheet(1);
    
            // // Update the data in the sheet
            data.forEach((d, idx) => {
                sheet.getCell(`A${idx + 1}`).value = d.Date;
                sheet.getCell(`B${idx + 1}`).value = d.sNo;
                sheet.getCell(`C${idx + 1}`).value = d.rtcId;
                sheet.getCell(`D${idx + 1}`).value = d.cdNumber;
                sheet.getCell(`E${idx + 1}`).value = d.projectName;
                sheet.getCell(`F${idx + 1}`).value = d.projectResource;
                sheet.getCell(`G${idx + 1}`).value = d.pjCode;
                sheet.getCell(`H${idx + 1}`).value = d.IATotals;
            });
    
            // // Save the changes to the file
            // await workbook.xlsx.writeFile(selectedFile);
            const buffer = await workbook.xlsx.writeBuffer();
            const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

            const blob = new Blob([buffer], {type: fileType});

            saveAs(blob, selectedFile.name);
        }
    }

    const handleEdit = async (item) => {
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
        const currentRowIndex = data.findIndex(item => item.sNo === editData.sNo);
        currentData[currentRowIndex] = editData;
        setData([...currentData])
        setEditData(null)
    };

    const handleDelete = (itemToDelete) => {
        //   // Handle delete logic here
        // setDeleteData();
        // Implement the logic to save the edited data here
        // setEditData(item);
        // saveToLocalStorage(editData);
        // Update the state with the edited data
        // setEditData(editData);
        const newData = data.filter(item => item.sNo !== itemToDelete.sNo);
        setData([...newData])
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

    const GetExcelColumnName = (columnNumber) => {
        let columnName = "";

        while (columnNumber > 0)
        {
            let modulo = (columnNumber - 1) % 26;
            columnName = String.fromCharCode('A' + modulo) + columnName;
            columnNumber = (columnNumber - modulo) / 26;
        } 

        return columnName;
    }

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
                <IAActualsDelete data={data} onDelete={handleDelete} onCancel={handleCancel} />
            )}

        </div>
    );
};

export default IAActuals;