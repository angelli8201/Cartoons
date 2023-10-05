import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Post from '../components/Post'
export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:8080/cartoons/post");
            if (response.ok) {
                setPosts(await response.json());
            } else {
                setPosts([]);
            }
        };

        fetchPosts();
    }, []);



    return (
        <>
        {posts.length == 0 ?
            <div className="alert alert-warning py-4">
                No posts found.<br />
                Do you want to add an post?
            </div>
            : <Post post={posts} />}
    </>
);
}
