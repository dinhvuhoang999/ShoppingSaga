import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import LoginPage from '../pages/LoginPage';
// import Form from '../components/Form';
import AppRouter from '../router';
import '../assets/css/bootstrap.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';

function App(props) {
  const { getUser, userState } = props;

  const accessToken = localStorage.getItem('AUTHENTICATE_TOKEN');

  useEffect(() => {
    if (!accessToken) return null;
    getUser();
    return () => {};
  }, [accessToken]);

  return (
    <div className="App">
      {accessToken === null ? (
        <LoginPage />
      )
        : (
          <>
            <Navigation username={userState.user.username} />
            <AppRouter />
            <Footer />
          </>
        )}
    </div>
  );
}

App.propTypes = {
  getUser: PropTypes.instanceOf(Object).isRequired,
  userState: PropTypes.instanceOf(Object).isRequired,
};

export default App;
