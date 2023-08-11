import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          value={users.name}
          onchange={handleTextChange}
          placeholder='User Name'
          required
        />
        <label htmlFor='photo'>Photo:</label>
        <input
          id='photo'
          type='text'
          value={users.photo}
          onchange={handleTextChange}
          placeholder='User Photo'
        />
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type='text'
          value={users.email}
          onchange={handleTextChange}
          placeholder='User Email'
          required
        />
        <label htmlFor='address'>Address:</label>
        <input
          id='address'
          type='text'
          value={users.address}
          onchange={handleTextChange}
          placeholder='User Address'
        />
        <label htmlFor='age'>Age:</label>
        <input
          id='age'
          type='number'
          value={users.age}
          onchange={handleTextChange}
          placeholder='User Age'
          required
        />

        <label htmlFor='payment_info'>Payment Info:</label>
        <input
          id='payment_info'
          type='number'
          value={users.payment_info}
          onchange={handleTextChange}
          placeholder='User Payment Info'
        />
      </form>
      <div>
        <input id='submit' type='submit' />
        <Link to={'/videoGames'}>
          <button id='backNew'>Back</button>
        </Link>
      </div>
    </div>
  );
}
