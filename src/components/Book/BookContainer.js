import React, { Fragment,useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch , useSelector } from 'react-redux';
import { getBooks } from '../../store/bookSlice';

import { useState } from 'react';
import './book.css';

const PostContainer = () => {
  const [currentBook,setCurrentBook]=useState(null);
  const dispatch= useDispatch();
  const {isLoading,bookList}=useSelector(state=>state.books);
  const{ isLoggedIn }=useSelector(state=>state.auth);
  useEffect(()=>{
 dispatch(getBooks());
  },[]);

  const getBook =(id)=>{
    const selectBook=bookList.find((book)=>book.id===id)

setCurrentBook((prev)=>{return {...prev,...selectBook}});
    console.log(currentBook)


  }
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
           <BooksList isLoading={isLoading} books={bookList} isLoggedIn={isLoggedIn} readBook={getBook}/> 
         
        </div>
        <div className='col side-line'>
        <BookInfo  isLoading={isLoading} book={currentBook}/>
       
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
