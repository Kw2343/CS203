import { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './FirebaseAuth.css';
import { Link, useNavigate } from 'react-router-dom';

export const FirebaseAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  useEffect(() => {
   
    const fetchAdminCredentials = async () => {
      try {
        const usersRef = db.collection("users");
        const adminUser = await usersRef.where("role", "==", "admin").limit(1).get();

        if (!adminUser.empty) {
          const data = adminUser.docs[0].data();
          setAdminEmail(data.email);
          setAdminPassword(data.password); 
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdminCredentials();
  }, []);

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };

  const adminLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); 
      clearForm();
      setAuthenticated(true);
      navigate('/member');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setErrorMessage("Incorrect admin credentials");
      } else {
        setErrorMessage("Incorrect admin username or password.");
      }
    }
  };

  return (
    <div className='AuthBackgroud'>
      <div className={` ${authenticated ? 'hidden' : ''}`}>
        <div className="admin-login-container">
          <div className="auth-form">
            <p>Enter your Credential</p>
            <input
              className="auth-input"
              placeholder="Email.."
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="auth-input"
              placeholder="Password.."
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
             <div className="error-message">{errorMessage}</div>
            <button
              className="auth-button"
              onClick={adminLogin}
            >
              Member Login
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAuth;
