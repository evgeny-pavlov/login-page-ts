import React, { useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../../components/Spinner/Spinner'

const ProfilePage: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  const handleLogout = () => {
    logout();
  };

  const userName = isLoading ? <Spinner /> : user?.username;
  const userCompany = isLoading ? <Spinner /> : user?.company;

  return (
    <div className="profile-page">
      <h2>Hello, {userName} </h2>
      <h2>Company: {userCompany}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
