
import { Link, useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap'; 

function Post({posts}){

    return(
        <div>
            <Card style={{ width: '65rem', marginBottom: '20px' }}>
        <Card.Body>
        <Card.Title style={{ fontSize: '3rem' }}>Card Title</Card.Title>
        <Card.Text style={{ fontSize: '1.5rem' }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>


</div>
    )
}

export default Post;


