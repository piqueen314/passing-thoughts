import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';


export function AddThoughtForm(props) {
  const [text, setText] = useState('')
  const handleTextChange = (event) =>{
    setText(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let thought = {
      id:generateId(),
      text:text,
      expiresAt:getNewExpirationTime()
    };
    if( text.length > 0){
      props.addThought(thought);
      setText("");
    }
    
  }
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
