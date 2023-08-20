import { useState } from "react";
import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  // const [isSelected, setIsSelected] = useState(false);

  const handleSetAddFriend = () => {
    setAddFriend(show => !show)
  }

  const handleSetFriends = (friend) => {
    setFriends(friends => [...friends, friend]);
    setAddFriend(!addFriend)
  }

  const handleSelectedFriend = (friend) => {
    // if (selectedFriend?.id === friend.id) {
    //   setSelectedFriend(null);
    // } else {
    //   setSelectedFriend(friend);
    // }
    // setIsSelected(!isSelected);

    // modifying based on current selection and using optional chaining to see if the value is null
    setSelectedFriend(cur => cur?.id === friend.id ? null : friend);
    setAddFriend(false);
  }

  const handleSplitBill = (value) => {
    console.log(value);
    setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList data={friends} selectedFriend={selectedFriend} handleSelectedFriend={handleSelectedFriend} />
        {addFriend && <FormAddFriend onAddFriend={handleSetFriends} />}

        <Button onClick={handleSetAddFriend}>{addFriend === true ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
