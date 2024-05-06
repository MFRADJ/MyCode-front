// components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Header from './Header';
import Footer from './Footer';

function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <div className="container">
                <Sidebar />
                <MainContent />
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
