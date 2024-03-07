import React, { useContext } from 'react'
import noteContext from '../context/noteContext';
export default function Contact() {
  const access=useContext(noteContext)
    console.log(access.state.Token+"  .......CONTACT" );
  return (
    <div>Contact</div>
  )
}        
