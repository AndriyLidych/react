import React from 'react';
import './App.css';
import Post from './Post/Post';
const avatar_image = "https://i1.sndcdn.com/avatars-000560486658-t1txpn-t240x240.jpg";
const ukraineImage = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg";


const App = () => {
    return (
        <div>
            <Post author={{
                name: "Lidych Andriy",
                photo: avatar_image,
                nickname: "@AL"
            }}
                  content="1111111111"
                  image={ukraineImage}
                  date={"1 september."}
            />

        </div>
    )
}

export default App;
