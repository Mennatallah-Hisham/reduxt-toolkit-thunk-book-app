import { useDispatch } from "react-redux";
import { deleteBook } from "../../store/bookSlice";


const BooksList = ({isLoading,books,isLoggedIn,readBook}) => {
  const dispatch=useDispatch();
  const bookList = books.length>0 ? books.map((book)=>(
    <li className='list-group-item d-flex  justify-content-between align-items-center'
    key={book.id}>
    <div>{book.title}</div>
    <div className='btn-group' role='group'>
      <button type='button' className='btn btn-primary'
onClick={()=>{readBook(book.id)}}
      >
        Read
      </button>
      <button type='button' className='btn btn-danger'
      disabled={!isLoggedIn}
       onClick={()=>{
        dispatch(deleteBook(book)
        ).unwrap().then((data)=>{
          // data ==> action of book/delete/fulfilled
          // data.payload 
console.log(data);
        })
      }}>
        Delete
      </button>
    </div>
  </li>

  )): <div className="alert alert-dark" role="alert">
there is no books avialabe
</div>;
  return (
    <div>
      <h2>Books List</h2>
      {isLoading?"Loading .....":
      ( <ul className='list-group'>
        {
          
        bookList
          
        }
    
    </ul>

      )}
     
    </div>
  );
};

export default BooksList;
