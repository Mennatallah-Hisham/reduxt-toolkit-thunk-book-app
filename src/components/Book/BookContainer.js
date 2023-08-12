import React, { Fragment,useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch , useSelector } from 'react-redux';
import { getBooks } from '../../store/bookSlice';


import './book.css';

const PostContainer = () => {
  const dispatch= useDispatch();
  const {isLoading,bookList}=useSelector(state=>state.books);
  const{ isLoggedIn }=useSelector(state=>state.auth);
  useEffect(()=>{
 dispatch(getBooks());
  },[]);
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
           <BooksList isLoading={isLoading} books={bookList} isLoggedIn={isLoggedIn}/> 
         
        </div>
        <div className='col side-line'>
        <BookInfo  isLoading={isLoading} />
       
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
