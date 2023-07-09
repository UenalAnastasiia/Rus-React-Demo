import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from "../hooks/useFetching";
import PostService from '../API/PostService';
import Loader from '../components/UI/Loading/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchCommentsById, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, []);

    return (
        <div>
            <h1>Sie haben den Post geöffnet ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>
                    {post.id}. {post.title}
                </div>
            }

            <h1>Comments</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comment => 
                        <div key={comment.id} style={{marginTop: 15}}>
                            <h5>{comment.email}</h5>
                            <h5>{comment.body}</h5>
                        </div>
                )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;