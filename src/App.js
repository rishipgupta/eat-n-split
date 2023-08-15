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

  const handleSetAddFriend = () => {
    setAddFriend(show => !show)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList data={initialFriends} />
        {addFriend && <FormAddFriend />}

        <Button onClick={handleSetAddFriend}>{addFriend === true ? "Close" : "Add Friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
