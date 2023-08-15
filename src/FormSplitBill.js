import React from 'react'
import Button from './Button'

const FormSplitBill = () => {
  return (
    <form
      className='form-split-bill'>
      <h2>SPLIT A BILL WITH X</h2>
      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🧑🏽 Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑X's expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill
