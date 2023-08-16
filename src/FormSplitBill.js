import React from 'react'
import { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({ selectedFriend }) => {
  const [billAmount, setBillAmount] = useState("");

  const [yourExpense, setYourExpense] = useState("");


  return (
    <form
      className='form-split-bill'>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />

      <label>🧑🏽 Your expense</label>
      <input type="text" value={yourExpense} onChange={(e) => setYourExpense(e.target.value)} />

      <label>🧑‍🤝‍🧑{selectedFriend.name} expense</label>
      <input type="text" disabled value={Number(billAmount) - Number(yourExpense)} />

      <label>🤔 Who is paying the bill</label>
      <select>
        <option>You</option>
        <option>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill
