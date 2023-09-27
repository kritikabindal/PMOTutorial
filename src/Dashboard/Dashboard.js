
// import React, { useState } from 'react';
// import './Dashboard.css'; 
// const Dashboard = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
//   return (
//     <div className="dashboard-container">
//       <h2>Welcome to the Dashboard</h2>
//       <label>Select an option:</label>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Select an option</option>
//         <option value="IA Actuals">IA Actuals</option>
//         <option value="Workstack">Workstack</option>
//       </select>
//       {selectedOption && <p>You selected: {selectedOption}</p>}
//     </div>
//   );
// };
// export default Dashboard;


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
// import { Switch, Route } from 'react-router-dom';


const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const history = useHistory(); // Get the history object

    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === 'IA Actuals') {
            // Route to the IAActuals component
            history.push('/ia-actuals');
        } else if(selectedValue === 'Workstack'){
            history.push('/workstack?data=workstack');

        }
    };



    return (
        <div className="dashboard-container">
            <h2>Welcome to the Dashboard</h2>
            <label>Select an option:</label>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                <option value="IA Actuals">IA Actuals</option>
                <option value="Workstack">Workstack</option>
            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    );
};

export default Dashboard;