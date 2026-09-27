import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AuthTypes } from '../types/AuthTypes';
import { useHistory } from 'react-router';


const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = () => {
    dispatch({type: AuthTypes.login})
    history.push("/men");
  };

  return (
    <>
      <div className='container mt-5 text-center'>
        <img src="/assets/animate.gif" alt="animacion"/>
        <h1 className='my-3'>Login Screen</h1>
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
      </div>
      
      
    </>
  );
};

export default LoginScreen;