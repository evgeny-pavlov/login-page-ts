import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username);
    navigate('/profile');
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
}

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => handleChangeName(e)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
