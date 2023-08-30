    dispatch(deleteBook(book)
        ).then((data)=>{
          // data ==> action of book/delete/fulfilled
          // data.payload 
console.log(data);
        })

## unwrap
 dispatch(deleteBook(book)
        ).unwrap().then((data)=>{
         // data ==> action.payload
console.log(data);
        }).catch(()=>{})

    
    