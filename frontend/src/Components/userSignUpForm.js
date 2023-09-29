import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/userSignUpForm.scss';
const URL = process.env.REACT_APP_API_URL;

export default function NewUser() {
  const navigate = useNavigate();
  const [users, createUser] = useState({
    name: '',
    photo: '',
    email: '',
    address: '',
    age: 0,
    enrollment_date: '',
    membership: false,
    payment_info: 0,
    password: '',
  });

  const newUser = (users) => {
    axios
      .post(`${URL}/users`, users)
      .then(() => {
        navigate('videoGames');
      })
      .catch((error) => console.warn('catch', error));
  };

  const handleTextChange = (event) => {
    createUser({ ...users, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser(users);
  };
  return (
    <>
      <h1
        id='FormBlurb'
        className='font-fonts text-rose-700 text-5xl font-semibold content-center'
      >
        Make A New User Profile
      </h1>
      <div id='RegisterForm'>
        <form className='NewUserForm' onSubmit={handleSubmit} method='POST'>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            value={users.name}
            onChange={handleTextChange}
            placeholder='User Name'
            required
          />
          <label htmlFor='photo'>Photo:</label>
          <input
            id='photo'
            type='text'
            value={users.photo}
            onChange={handleTextChange}
            placeholder='User Photo'
          />
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            value={users.email}
            onChange={handleTextChange}
            placeholder='User Email'
            required
          />
          <label htmlFor='address'>Address:</label>
          <input
            id='address'
            type='text'
            value={users.address}
            onChange={handleTextChange}
            placeholder='User Address'
          />
          <label htmlFor='age'>Age:</label>
          <input
            id='age'
            type='number'
            value={users.age}
            onChange={handleTextChange}
            placeholder='\'
            required
          />
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            type='text'
            value={users.password}
            onChange={handleTextChange}
            placeholder='Password'
            required
          />

          <label htmlFor='payment_info'>Payment Info:</label>
          <input
            id='payment_info'
            type='number'
            value={users.payment_info}
            onChange={handleTextChange}
            placeholder='User Payment Info'
          />

          <div></div>
        </form>
        <Link to={'../videoGames'}>
          <input id='submit' type='submit' />
        </Link>
        <Link to={'/videoGames'}>
          <button id='backNew'>Back</button>
        </Link>
      </div>
    </>
  );
}
