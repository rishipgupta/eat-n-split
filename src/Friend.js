import React from 'react'
import Button from './Button'

const Friend = ({ friend, handleSelectedFriend, selectedFriend }) => {
  // let isSelected;
  let isSelected = selectedFriend?.id === friend.id;
  // if (selectedFriend) {
  // }

  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />

        <h3>{friend.name}</h3>

        {friend.balance < 0 && <p className='red'> You owe {friend.name} {friend.balance}$</p>}

        {friend.balance > 0 && <p className='green'> Your {friend.name} owes you {friend.balance}$</p>}

        {friend.balance === 0 && <p> You and {friend.name} are even</p>}
        <Button onClick={() => handleSelectedFriend(friend)}>{isSelected ? "Close" : "Select"}</Button>
      </li>
    </>
  )
}

export default Friend
