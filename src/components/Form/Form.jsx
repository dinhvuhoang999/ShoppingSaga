import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  const { Login } = props;

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
    Login({
      nameLogin: name,
      passwordLogin: password,
    });
  };
  return (
    <form>
      <div className="form-group">
        <p>User</p>
        <input onChange={handleChangeName} className="form-control" />
      </div>
      <div className="form-group">
        <p htmlFor="firstName">Password</p>
        <input
          onChange={handleChangePassword}
          type="name"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  Login: PropTypes.instanceOf(Object).isRequired,
};

export default Form;
