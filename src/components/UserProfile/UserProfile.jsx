import * as React from "react"
import { formatNumTweets, formatNumFollowers } from "../../utils/format"
import "./UserProfile.css"
import ProfilePic from "../../assets/CodePath_profile.jpg"

export default function UserProfile({ userProfile }) {
  return (
    <div className="col user-profile">
      <div className="card">
        <div className="card-bg" />
        <CardContent name={userProfile.name} handle={userProfile.handle} interests={userProfile.interests} 
                    location={userProfile.location} bio={userProfile.bio} profilePicture={userProfile.profilePicture}/>
        <CardFooter numTweets={userProfile.numTweets} numFollowing={userProfile.numFollowing} numFollowers={userProfile.numFollowers} />
      </div>
    </div>
  )
}

export function CardContent(props) {
  return (
    <div className="card-content">
      <span className="fa-stack add-picture-icon">
        <img className = "profile-pic" src={ProfilePic} width ={30} height={30} />
      </span>
      <div className="twitter-handle">
        <h3>{props.name}</h3>
        <p>@{props.handle}</p>
        <p>{props.location}</p>
        <p className="black">{props.bio}</p>
        <p className="black">Interests: {props.interests}</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export function CardFooter(props) {
  return (
    <div className="card-footer">
      <p>Tweets</p>
      <p>Following</p>
      <p>Followers</p>
      <span className="metric">{props.numTweets ? formatNumTweets(props.numTweets) : null}</span>
      <span className="metric">{props.numFollowing ? formatNumFollowers(props.numFollowing) : null}</span>
      <span className="metric">{props.numFollowers ? formatNumFollowers(props.numFollowers) : null}</span>
    </div>
  )
}
