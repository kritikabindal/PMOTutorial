import React, { useState } from 'react';
import './workstackSearch.css';

const WorkstackSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="ia-actuals-search">
            <h3>Search by CD Number</h3>
            <input
                type="text"
                placeholder="Enter CD Number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default WorkstackSearch;
