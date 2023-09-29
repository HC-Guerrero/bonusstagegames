import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = ({ setAuth }) => {
  const URL = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  });

  const { email, password, name } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(`${URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem('token', parseRes.jwtToken);
        setAuth(true);
        toast.success('Register Successfully');
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className='mt-5 text-center'>Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={(e) => onChange(e)}
          className='form-control my-3'
        />
        <input
          type='password'
          name='password'
          value={password}
          placeholder='password'
          onChange={(e) => onChange(e)}
          className='form-control my-3'
        />
        <input
          type='text'
          name='name'
          value={name}
          placeholder='name'
          onChange={(e) => onChange(e)}
          className='form-control my-3'
        />
        <button className='btn btn-success btn-block'>Submit</button>
      </form>
      <Link to='/login'>login</Link>
    </div>
  );
};

export default Register;
