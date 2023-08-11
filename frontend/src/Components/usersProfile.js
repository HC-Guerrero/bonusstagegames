import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export default function UserProfile() {
  const { id } = useParams();
  const [user, getAUser] = useState({
    name: '',
    photo: '',
    email: '',
    address: '',
    age: 0,
    enrollment_date: '',
    membership: false,
    payment_info: 0,
  });
  useEffect(() => {
    renderComponent();
  }, []);

  const renderComponent = async () => {
    await axios
      .get(`${URL}/users/${id}`)
      .then((response) => {
        getAUser(response.data.payload);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div id='userProfile__Div'>
      <h3 id='userProfile__Name'>{user?.name}</h3>
      <img
        src={user?.photo}
        id='userProfile__image'
        className='w-full rounded-3xl border-logored '
        height='300'
        width='200'
        alt='game image'
      />
      <p id='userProfile__email'>{user?.email}</p>
      <p id='userProfile__age'>{user?.age}</p>
      <p id='userProfile__enrollment'>User Since: {user?.enrollment_date}</p>
      <p id='userProfile__membership'>Is a Member: {user?.membership}</p>
    </div>
  );
}
