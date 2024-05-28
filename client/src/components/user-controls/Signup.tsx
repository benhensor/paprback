import React from 'react';

const Signup: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  return (
    <div>
      <h2>Sign up</h2>
      {/* Your signup form goes here */}
      <p>
        Already have an account? <button onClick={toggle}>Log in</button>
      </p>
    </div>
  );
};

export default Signup;
