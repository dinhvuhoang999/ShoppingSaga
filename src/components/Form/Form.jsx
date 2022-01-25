import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form(props) {
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
  login: PropTypes.instanceOf(Function).isRequired,
};

export default Form;
