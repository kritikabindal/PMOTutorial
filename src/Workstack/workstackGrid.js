import React from 'react';
import './workstackGrid.css';

const WorkstackGrid = ({ data, onEdit, onDelete }) => {
    return (
        <div className="ia-actuals-grid">
            {/* <h3>IA Actuals Data</h3> */}
            {/* Todo: add all fields here from workbook */}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sno</th>
                        <th>RTC ID</th>
                        <th>CD Number</th>
                        <th>Project Name</th>
                        <th>Application</th>
                        <th> PJ code</th>
                        <th>cost</th>
                        <th>IAEffort</th>
                        <th>December_2022</th>
                        <th>January_2023</th>

                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (
                        <tr key={item.id}>
                            <td>{Date(item.Date)}</td>
                            <td>{item.sNo}</td>
                            <td>{item.rtcId}</td>
                            <td>{item.cdNumber}</td>
                            <td>{item.projectName}</td>
                            <td>{item.Application}</td>
                            <td>{item.PjCode}</td>
                            <td>{item.cost}</td>
                            <td>{item.IAEffort}</td>
                            <td>{item.December_2022}</td>
                            <td>{item.january_2023}</td>
                            <td>
                                <button onClick={() => onEdit(item)}>Edit</button>
                                <button onClick={() => onDelete(item)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WorkstackGrid;

// import React from 'react';

// const IAActualsGrid = ({ data, onEdit, onDelete }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Property 1</th>
//           <th>Property 2</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data?.map((item) => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.property1}</td>
//             <td>{item.property2}</td>
//             <td>
//               <button onClick={() => onEdit(item)}>Edit</button>
//               <button onClick={() => onDelete(item.id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default IAActualsGrid;