import React, { Fragment, useEffect } from 'react';

const BookInfo = ({isLoading,book}) => {



  return (
    <Fragment>
      <h2>Book Details</h2>
      {book?
      (
        <div>
          <div className='row mt-5'>
          <p className='h5 text-capitalize fs-3 col-6'>{book.title}</p>
          <p className='h5 col-6'>{book.price} $</p>
          </div>
       
        <p className='fw-light'>{book.description}</p>
       
      </div>

      ):
      (
        <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select!
      </div>
      )}
     

    </Fragment>
  );
};

export default BookInfo;
