import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginPage(props) {
  const { login } = props;
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      nameLogin: name,
      passwordLogin: password,
    });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="name" placeholder="username" onChange={handleChangeName} />
          <input type="password" placeholder="password" onChange={handleChangePassword} />
          <button type="submit" onClick={handleSubmit}>login</button>
          <p className="message">
            Not registered?
            {' '}
            <a href="s#">Create an account</a>
          </p>
        </form>
      </div>
    </div>

  );
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  // login: () => {},
};

export default LoginPage;
