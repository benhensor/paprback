import React from 'react';

const Login: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  return (
    <div>
      <h2>Login</h2>
      {/* Your login form goes here */}
      <p>
        Don't have an account? <button onClick={toggle}>Sign up</button>
      </p>
    </div>
  );
};

export default Login;