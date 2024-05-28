import React, { useState } from 'react';
import Login from '../components/user-controls/Login';
import Signup from '../components/user-controls/Signup';

const LoginSignupPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login toggle={toggleForm} />
      ) : (
        <Signup toggle={toggleForm} />
      )}
    </div>
  );
};

export default LoginSignupPage;
