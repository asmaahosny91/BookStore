import React, { Fragment, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getBooks } from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const PostContainer = () => {
  const dispatch=useDispatch();
  const isLoading = useSelector((state) => state.books);
 
  useEffect(()=>{
    console.log("s",isLoading)
    dispatch(getBooks());
  },[])
  console.log("s",isLoading)
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading}/>
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
