import React, { useState } from 'react';
import Form from './components/Form'
import data from './data'
import './App.css';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'Malcolm Reynolds',
    email: 'browncoats4lyfe@xian.ch',
    role: 'Captain'
  },
  {
    id: 2,
    name: 'Hoban Washburn',
    email: 'leafonthewind@wahoo.com',
    role: 'Pilot'
  },
  {
    id: 3,
    name: 'Kaylee Frye',
    email: 'keepflyin@serenity.ship',
    role: 'Mechanic, Cutie-Pie'
  }])

// Functionality to create a new member based on form input
const addNewMember = member => {
  const newMember = {
  id: Date.now(), // Date.now creates a unique key
  name: member.name,
  email: member.email,
  role: member.role
}
setMembers([...members, newMember]) // Use spread (...) operator to append new member to the end of the existing array without mutating the original
}

  return (
    <div className="App">
      <h1>Welcome to the Crew</h1>
      <Form addNewMember={addNewMember} />      
    <div className='team-members'>
      <ul>
        {members.map((member) => ( // Map through array of team members and render their name
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
