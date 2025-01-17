import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slices/postsslice";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router";
import { getComments } from "../slices/commentsSlice";

const Post = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
        dispatch(getComments())
    }, [])
    // Fetch posts from an API or local storage
    const postsState = useSelector((state) => state.myPosts);
    const commentsState = useSelector((state) => state.myComments);
    if(postsState.loading) {
        return <Spinner />
    }

    if(postsState.error) {
        return <div className="flex items-center justify-center text-4xl font-bold text-red-600 ">
            {postsState.error}
        </div>
    }
    const comment = commentsState.comments.find((comment) => comment.postId === +id)
    const post = postsState?.posts?.find((post) => post.id === +id);
    return (
        <div className="p-2 md:p-4 lg:p-8">
            <div className="flex flex-col justify-center space-y-5 weyn">
                <div className="details ">
                    <h1 className="text-xl font-semibold text-blue-600">{post?.title}</h1>
                    <p className="font-mono ">{post?.body}</p>

                </div>
                <div className="comments">
                        <div className="p-2 bg-gray-200 rounded-md comment">
                            <h1 className="text-[14px] font-mono font-semibold text-blue-600">{comment?.email}</h1>
                            <p className="font-serif text-lg text-gray-700">{comment?.body}</p>
                        </div>

                    {/* {
                        comments?.map((comment) => (
                            <div key={comment.id} className="p-2 my-2 border-b border-gray-200">
                                <h1>{comment.postId}</h1>
                                <p className="font-mono text-sm text-gray-700">{comment.body}</p>
                            </div>
                        )) || <p className="font-mono text-sm text-gray-700">No comments yet.</p>
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Post