import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    // Realtime connection to the database and it maps to the state
    // pulling data from the db after it's pushed to the db when one types their message in the message sender
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
          setPosts(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        })))
        )
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
            
        </div>
    )
}

export default Feed
