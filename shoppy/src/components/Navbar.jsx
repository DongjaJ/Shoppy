import React, { useState } from 'react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { BsPencilFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { login, logout } from '../apis/Login';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleClickCard = () => {
    user ? navigate('/carts') : navigate('/');
  };

  async function toggleLogin() {
    console.log(`user: ${user}`);
    if (user) {
      try {
        await logout();
        setUser('');
        alert(`${user.displayName} logout!`);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const loginedUser = await login();
        setUser(loginedUser);
        alert(`${loginedUser.displayName} login!`);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="flex items-center justify-around py-2">
      <Link to="/">
        <div className="flex items-center text-orange-600 text-3xl cursor-pointer">
          <FiShoppingBag className="mr-2" />
          <p>Shoppy</p>
        </div>
      </Link>
      <div className="flex items-center">
        <Link to="/products">
          <p className="text-lg mr-2 cursor-pointer hover:text-orange-600">
            Products
          </p>
        </Link>
        <FiShoppingCart
          className="text-xl mr-4 cursor-pointer hover:text-orange-600"
          onClick={handleClickCard}
        />
        <Link to="/registration">
          <BsPencilFill className="text-lg mr-2 cursor-pointer hover:text-orange-600" />
        </Link>

        {user && (
          <div className="flex justify-between items-center mr-8">
            <img src={user.photoURL} alt="" className="h-8 mr-2" />
            <p>{user.displayName}</p>
          </div>
        )}

        <button
          className="text-xl outline-none bg-red-400 text-zinc-100 p-2 font-bold"
          onClick={toggleLogin}>
          {user ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
}
