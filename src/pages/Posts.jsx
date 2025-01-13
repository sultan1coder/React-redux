import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/slices/postsSlice';
import Spinner from '../components/Spinner';

const Posts = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.myPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (postsState.loading) {
    return (
      <div className='flex items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  if (postsState.error) {
    return <p className='text-center text-red-500'>{postsState.error}</p>;
  }

  return (
    <div className='grid grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {postsState.posts.map((post) => (
        <div className='p-3 transition-all border rounded-md shadow-sm cursor-pointer hover:bg-black hover:text-white'>
          <h1 className='text-xl font-bold'>{post.title}</h1>
          <p className='my-3 text-sm'>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;