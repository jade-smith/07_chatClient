import { useState } from 'react';

async function AddMessage(props) {
    const userMessage = {
        date: Date(),
        text: {props.text},
        user: {props.user},
      };

      //! Creating a new message
  const messagePost =  new Message(userMessage);

  //! Save message to database
  const newMessage = await messagePost.save(); 
    return (
        <>
        { messagePost ? newMessage : null }
        </>
    )
}

export default AddMessage;