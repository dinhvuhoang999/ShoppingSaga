import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import Form from '../components/Form';
import AppRouter from '../router';

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
      <AppRouter>
        <Navigation username={userState.user.username} />
        {accessToken === null && <Form />}
      </AppRouter>
    </div>
  );
}

App.propTypes = {
  getUser: PropTypes.instanceOf(Object).isRequired,
  userState: PropTypes.instanceOf(Object).isRequired,
};

export default App;
