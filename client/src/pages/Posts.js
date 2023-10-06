import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PostCard from '../components/PostCard'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function Posts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    


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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <iframe
                    src="https://giphy.com/embed/dJD0xpWqYDkic"
                    width="480"
                    height="365"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                    style={{ margin: '10px' }}
                />
                <iframe
                    src="https://giphy.com/embed/YAnpMSHcurJVS"
                    width="480"
                    height="360"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                    style={{ margin: '10px' }}
                />
            </div>
        
        <p></p>
        <Link className='btn btn-primary btn-lg mb-3' to = '/postform'>
             Make a Post
        </Link>
        {posts.length === 0 ?
            <div className="alert alert-warning py-4">
                No posts found.<br />
                Do you want to add an post?
            </div>
            :  (
                posts.map(post => <PostCard key={post.id} post={post} />)
            )}
    </>
);
}
