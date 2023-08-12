import React from 'react'
import Friend from './Friend'

const FriendsList = ({ data }) => {
  return (
    <ul>
      {data.map((friend) => <Friend key={friend.id} friend={friend} />)}
    </ul>
  )
}

export default FriendsList
