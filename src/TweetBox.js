import React, { useState } from 'react'
import "./TweetBox.css";
import {Avatar,Button} from "@material-ui/core";
import db from './firebase';

function TweetBox () {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "arshdeep",
            username: "Hanjra",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://helostatus.com/wp-content/uploads/2021/03/DP-image.jpg"
        });
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
          <form>
              <div className="tweetBox__input">
              <Avatar src="/static/images/avatar/1.jpg" />
              <input  
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text"
               />
              </div>
              <input 
              value={tweetImage}
              onChange={e => setTweetImage(e.target.value)}
              className="tweetBox__imageInput" 
              placeholder="Optional : Enter Image URL" 
              type="text" />
              <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">TWEET</Button>
          </form>  
        </div>
    )
}

export default TweetBox
