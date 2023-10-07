import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
const BASE_URL = 'http://localhost:8080/cartoons/post';


export default function PostForm(){
    const { user} = useAuth();
    const userId = user ? user.userId : null;
    
    const innerContainerStyle = {
        backgroundColor: "#f8f8ff",
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        margin: '20px', 
    };
    const [post, setPost] = useState({
        title: "",
        caption: "",
        reference: "",
        userId: userId,
       
    });

    
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    function handleSubmit(evt) {
        evt.preventDefault();

        
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        };

        let url = BASE_URL;
        
    
        fetch(url, config)
            .then(response => {
                if (response.ok) {
                    setErrors([])
                    navigate('/posts');
                } else {
                    return response.json();
                }
                })
            .then(errs => {
                if (errs) {
                    return Promise.reject(errs);
                }
            })
            .catch(errs => {
                if (errs.length) {
                    setErrors(errs);
                } else {
                    setErrors([errs]);
                }
            });
    }


    
    function handleChange(evt) {

        setPost(previous => {
            const next = { ...previous };
            next[evt.target.name] = evt.target.value;
            return next;
        });

    }

    return (
        <div style={innerContainerStyle}>
            <h1 className="display-6"> Make a Post</h1>
            {errors && errors.length > 0 && <div className="alert alert-danger">
                <ul className="mb-0">
                    {errors.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>}
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" className="form-control" required  
                    onChange={handleChange} value={post.title}
                     />
                </div>
                <div className="row mb-3">
                    <label className="form-label" htmlFor="caption">Caption</label>
                    <input id="caption" name="caption" type="text" className="form-control" required
                     onChange={handleChange} value={post.caption}
                     />
                </div>
                <div className="row mb-3">
                    <label className="form-label" htmlFor="caption">Reference</label>
                    <input id="reference" name="reference" type="text" className="form-control" required
                     onChange={handleChange} value={post.reference}
                     />
                </div>
                
              
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <Link className='btn btn-secondary' to='/posts'>
						Cancel
					</Link>
                </div>
            </form>
           
        </div>
    );
}
