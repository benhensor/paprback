import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/user-controls/Login';
import Signup from '../components/user-controls/Signup';

const LoginSignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (window.location.pathname === '/login') {
      setIsLogin(true);
    } else if (window.location.pathname === '/signup') {
      setIsLogin(false);
    }
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    if (isLogin) {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  };

  return (
    <section>
      {isLogin ? (
        <Login toggle={toggleForm} />
      ) : (
        <Signup toggle={toggleForm} />
      )}
    </section>
  );
};

export default LoginSignupPage;
