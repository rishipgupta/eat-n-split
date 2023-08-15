import React from 'react';
import Button from './Button';

const FormAddFriend = () => {
  return (
    <form className='form-add-friend'>
      <label>😊Friend name</label>
      <input type="text" />
      <label>🌄image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend
