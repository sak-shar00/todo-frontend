import React from 'react';
import { GiNotebook } from "react-icons/gi";
import './navbar.css';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';


const Navbar = () => {
  const isLoggedIn=useSelector((state)=>state.isLoggedIn);
 const dispatch = useDispatch();
  const logout=()=>{
    sessionStorage.clear("id")
 dispatch(authActions.logout()); 
  }
  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
            <b><GiNotebook /> &nbsp;todo</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2"><Link className="nav-link active" to="/">Home</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link active" to="/about">AboutUs</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link active" to="/todo">Todo</Link></li>
            {!isLoggedIn && (
  <>
    <li className="nav-item mx-2"><Link className="nav-link active btn-nav" to="/signup">SignUp</Link></li>
    <li className="nav-item mx-2"><Link className="nav-link active btn-nav" to="/signin">SignIn</Link></li>
  </>
)}
{isLoggedIn && (
  <li className="nav-item mx-2" onClick={logout}><Link className="nav-link active btn-nav" to="/">LogOut</Link></li>
)}
 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
