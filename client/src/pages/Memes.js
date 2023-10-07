import { useState, useEffect } from "react";
import "../styles/Memes.css"

function Memes() {

    const [memes, setMemes] = useState([]);

    
    const memeData = [
        'https://api.time.com/wp-content/uploads/2019/08/caveman-spongebob-spongegar.png?w=637',
        'https://i.redd.it/xr5ojzv3ww151.jpg',
        'https://i.imgflip.com/1e4koz.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae609ea6-fc92-44e3-b6e4-30cf96e1fb4c/dcyef1a-a3e91504-4e4f-4900-b452-f9c09266005d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlNjA5ZWE2LWZjOTItNDRlMy1iNmU0LTMwY2Y5NmUxZmI0Y1wvZGN5ZWYxYS1hM2U5MTUwNC00ZTRmLTQ5MDAtYjQ1Mi1mOWMwOTI2NjAwNWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gRVRFma47N2RmO_dYkCPhVoVoOKJhS2l7-W5ozX_WWI',
        'https://static.tvtropes.org/pmwiki/pub/images/face_42.png',
        'https://images7.memedroid.com/images/UPLOADED883/6443778da5747.jpeg',
        'https://pbs.twimg.com/media/FIa9abbUUAAdpTK.jpg',
        'https://i.pinimg.com/originals/1f/4e/cd/1f4ecd0331d0b1823fd8dd77fa049fed.jpg',
        'https://uploads.dailydot.com/146/6e/6d78ec0c8c8eaf31.png?auto=compress&fm=png',
        'https://imgix.ranker.com/user_node_img/50007/1000132716/original/fry-on-internet-logins-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
        'https://i.redd.it/r0xwu22wow661.jpg',
        'https://img-9gag-fun.9cache.com/photo/aOQgBR2_460s.jpg',
    ];

    useEffect(() => {
        
        setMemes(memeData);
    }, []);


    return (
        <div>
            
            <div className="memes-list-container mt-4 pt-0">
            <h1 className="meme-title">MEMES</h1>
                {memes.map((memeUrl, index) => (
                    <div key={index} className="meme">
                        <img src={memeUrl} alt={`Meme ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Memes;