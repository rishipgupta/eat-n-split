import React from 'react'
import { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [billAmount, setBillAmount] = useState("");

  const [yourExpense, setYourExpense] = useState("");

  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendsExpense = billAmount - yourExpense;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billAmount || !yourExpense) return;
    onSplitBill(whoIsPaying === 'user' ? friendsExpense : -yourExpense)
    setBillAmount("");
    setYourExpense("");
    setWhoIsPaying("user");
  }
  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" value={billAmount} onChange={(e) => setBillAmount(Number(e.target.value))} />

      <label>🧑🏽 Your expense</label>
      <input type="text" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > billAmount ? yourExpense : Number(e.target.value))} />

      <label>🧑‍🤝‍🧑{selectedFriend.name} expense</label>
      <input type="text" disabled value={billAmount ? Number(billAmount) - Number(yourExpense) : ""} />

      <label>🤔 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill
