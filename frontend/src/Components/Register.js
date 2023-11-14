import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Register.scss';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

const Register = ({ setAuth }) => {
  const URL = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [visible, setVisible] = useState(false);

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
        // toast.success('Register Successfully');
      } else {
        setAuth(false);
        // toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1
        id='FormBlurb'
        className='font-fonts text-rose-700 text-5xl font-semibold content-center'
      >
        Register
      </h1>
      <div id='RegisterForm'>
        <h1
          id='FormBlurb'
          className='font-fonts text-rose-700 text-5xl font-semibold content-center'
        >
          Register
        </h1>
        <form className='NewUserForm' onSubmit={onSubmitForm}>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='email'
            value={email}
            placeholder='Email'
            onChange={(e) => onChange(e)}
            // className='form-control my-3'
          />
          <label htmlFor='password'>Password:</label>
          <input
            type={visible ? 'text' : 'password'}
            name='password'
            value={password}
            placeholder='Password'
            onChange={(e) => onChange(e)}
            // className='form-control my-3'
          />
          <div onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            onChange={(e) => onChange(e)}
            // className='form-control my-3'
          />
          <button id='submitBtn' className='btn btn-success btn-block'>
            Submit
          </button>
        </form>

        <Link to='/login'>
          <button id='Login'>Login</button>
        </Link>
        <Link to={'/videoGames'}>
          <button id='backNew'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
