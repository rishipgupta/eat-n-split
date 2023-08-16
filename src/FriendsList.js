import React from 'react'
import Friend from './Friend'

const FriendsList = ({ data, handleSelectedFriend, selectedFriend }) => {
  return (
    <ul>
      {data.map((friend) => <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} handleSelectedFriend={handleSelectedFriend} />)}
    </ul>
  )
}

export default FriendsList
