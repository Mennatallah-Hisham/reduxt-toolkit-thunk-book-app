import {useRef} from 'react';
import { insertBook } from '../store/bookSlice';
import { useDispatch ,useSelector} from 'react-redux';



const Addform = () => {
  const{ isLoggedIn }=useSelector(state=>state.auth);
  const titleRef=useRef(null);
  const priceRef=useRef(null);
  const descRef=useRef(null);
  const dispatch=useDispatch();
  
  const resetForm=()=>{
    titleRef.current.value=null;
    priceRef.current.value=null;
    descRef.current.value=null;
  }

  const submitHandler=(e)=>{

    e.preventDefault();
    const data={title:titleRef.current.value,
      price:priceRef.current.value,
      description:descRef.current.value}
    
    dispatch(insertBook(data));
    resetForm();
    

  }

  return (
 
      <div>
  
   
        <h2>Insert Book</h2>
        <form onSubmit={submitHandler} className='row'>
       <div className='col-md-6'>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' 
            ref={titleRef} required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price'
            ref={priceRef} required />
          </div>
          </div>
          <div className='col-md-6'>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              ref={descRef}
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
            Submit
          </button>
          </div>
        </form>
              
      </div>


  );
};

export default Addform;
