import React from 'react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import User from './User';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-2">
      <Link to="/">
        <div className="flex items-center text-brand text-4xl cursor-pointer">
          <FiShoppingBag />
          <p>Shoppy</p>
        </div>
      </Link>
      <div className="flex items-center gap-4 font-semibold">
        <Link to="/products">
          <p className="text-2xl cursor-pointer hover:text-brand">Products</p>
        </Link>
        <Link to="/carts">
          {user && (
            <FiShoppingCart className="text-2xl cursor-pointer hover:text-orange-600" />
          )}
        </Link>

        {user?.isAdmin && (
          <Link to="/products/new">
            <BsPencilFill className="text-2xl cursor-pointer hover:text-orange-600" />
          </Link>
        )}

        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </div>
    </div>
  );
}
