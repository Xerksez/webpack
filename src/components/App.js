import React from 'react';
import NavigationBar from './NavigationBar';
import BrowserList from './BrowserList';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <h1>Popular Web Browsers</h1>
            <BrowserList />
            <Footer />
        </div>
    );
};

export default App;
