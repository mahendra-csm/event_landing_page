import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';

import Layout from './components/Layout';

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/conferences/:slug" element={<CategoryDetail />} />
                    </Routes>
                </Layout>
            </Router>
        </HelmetProvider>
    );
};

export default App;
