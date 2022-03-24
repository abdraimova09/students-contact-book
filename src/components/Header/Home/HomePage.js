import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link to="/add">Add</Link>
            <br />
            <Link to="/list">List</Link>
        </div>
    );
};

export default HomePage;