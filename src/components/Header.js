import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { authAction } from '../store/authSlice';
const Header = () => {
  const {error}=useSelector(state=>state.books);
  const{isLoggedIn}=useSelector(state=>state.auth);
  const dispatch=useDispatch();
  return (
    <>
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit'
      onClick={()=>{
        dispatch(authAction.toggleLogin())
      }}>
     { isLoggedIn?"Log out":" Log In"}
      </button>
    </nav>{
      error &&  <div className="alert alert-danger" role="alert">
      {error}
      </div>
    }
   
    </>
    
  );
};

export default Header;
