import React from 'react'
import Button from './Button'

const Friend = ({ friend }) => {

  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />

        <h3>{friend.name}</h3>

        {friend.balance < 0 && <p className='red'> You owe {friend.name} {friend.balance}$</p>}

        {friend.balance > 0 && <p className='green'> Your {friend.name} owes you {friend.balance}$</p>}

        {friend.balance === 0 && <p> You and {friend.name} are even</p>}
        <Button>Select</Button>
      </li>
    </>
  )
}

export default Friend
