import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import Header from './components/header/Header';
import HomePage from './containers/HomePage';
import LoginSignupPage from './containers/LoginSignupPage';
import Dashboard from './containers/DashboardPage';
import Browse from './containers/BrowsePage';
import Book from './containers/BookPage';
import About from './containers/AboutPage';
import FAQ from './containers/FAQPage';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);


  useEffect(() => {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      const height = headerElement.clientHeight;
      setHeaderHeight(height);
    }
  }, []);

  return (
    <Router>
      <Header headerHeight={headerHeight}/>
      <main style={{ marginTop: headerHeight }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/signup" element={<LoginSignupPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/browse" element={<Browse />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
