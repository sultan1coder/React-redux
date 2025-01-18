import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/slices/postsSlice';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  const postsState = useSelector((state) => state.myPosts);


  if (postsState.loading === true) {
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
    <div className="p-1 duration-500 lg:p-4 ">
      <h1 className="text-2xl font-bold text-center text-blue-600">Posts</h1>
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {postsState.posts?.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="p-8 font-normal text-white transition-all bg-gray-500 duration-600 rounded-xl hover:bg-slate-200 hover:scale-105 hover:text-black">
            <h1 className="text-xl font-semibold text-left">{post.title}</h1>
            <p>{post.body}</p>
          </Link>
        ))}

      </div>
    </div>
  )
};

export default Posts;