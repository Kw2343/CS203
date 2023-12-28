import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import './Member.css';
import ComplexGrid from './forms/ComplexGrid';




const Member = () => {
  const [user, setUser] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }

    const updateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = '/firebaseauth';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="member-container">
      <div className="member-header">
        <div className="logout-button">
          {user && <button onClick={handleLogout} className='buttonlogout'>Logout</button>}
        </div>
        <div className="member-user-info">
          {user && (
            <div className="user-welcome">
              <h1>Welcome, {user.displayName}!</h1>
            </div>
          )}
        </div>

        <div className="date-time">
          <p>{currentDateTime}</p>
        </div>
      </div>
      <div className="member-content">
        <div style={{ marginBottom: '20px' }}>
      <ComplexGrid  
       imageUrl={require('../assets/MathBingo.jpg')}
       title="Math Bingo"
       resolution="Math Bingo is an engaging educational game that combines the excitement of bingo with fundamental math skills. "
       licenseId="1030114"
       play="continue to play"
      
       />
       </div>
       <div style={{ marginBottom: '20px' }}>
      <ComplexGrid
       imageUrl={require('../assets/uno.jpg')}
       title="Uno"
       resolution="Uno is a classic card game that challenges players to match colors ."
       licenseId="1030114"
       play="continue to play "
       />
       </div>
      </div>
    </div>
  );
};

export default Member;
