import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  function handleOnTweetTextChange(event) {
    props.setTweetText(event.target.value)
  }


  function handleOnSubmit() {
    let newTweet = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    }

    props.setTweets(props.tweets.concat(newTweet))
    props.setTweetText("")
    props.userProfile.numTweets++

  }
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount text={props.tweetText} />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disabled={(props.tweetText.length > 0 && props.tweetText.length < 141 ? false : true)}  />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span className={(140 - props.text.length) < 0 ? "red" : ""}>{props.text.length > 0 ? 140 - props.text.length : ""}</span>
}

export function TweetSubmitButton({handleOnSubmit, disabled}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={disabled}>Tweet</button>
    </div>
  )
}
