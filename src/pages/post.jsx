import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router";
import { getComments } from "../redux/slices/commentsSlice";
import { getPosts } from "../redux/slices/postsSlice";

const Post = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector(state => state.myComments.comments)
    useEffect(() => {
        dispatch(getPosts())
        dispatch(getComments())
    }, [])
    // Fetch posts from an API or local storage
    const postsState = useSelector((state) => state.myPosts);
    const commentsState = useSelector((state) => state.myComments);
    if (postsState.loading) {
        return <Spinner />
    }

    if (postsState.error) {
        return <div className="flex items-center justify-center text-4xl font-bold text-red-600 ">
            {postsState.error}
        </div>
    }
    const comment = commentsState.comments.find((comment) => comment.postId === +id)
    const post = postsState?.posts?.find((post) => post.id === +id);

    const postComment = comments.filter(com => com.postId === +id)

    console.log(comment)
    return (
        <div className="p-2 md:p-4 lg:p-8">
            <div className="flex flex-col justify-center space-y-5 weyn">
                <div className="details">
                    <h1 className="text-xl font-semibold text-blue-600"> <h2 className="text-xl font-bold text-blue-700 hover:underline hover:cursor-pointer">Post</h2>{post?.title}</h1>
                    <p className="font-mono">{post?.body}</p>

                </div>
                <div className="flex flex-col gap-3 comments">
                    <h1 className="text-xl font-bold text-blue-700 hover:underline hover:cursor-pointer">Comments</h1>
                    {
                        postComment.map(el => (
                            <div className="p-2 bg-gray-200 rounded-md comment">
                                <h1 className="text-[14px] font-mono font-semibold text-blue-600">{el.email}</h1>
                                <p className="font-serif text-lg text-gray-700">{el.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Post