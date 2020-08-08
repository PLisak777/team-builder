import React, { useState } from 'react'

const Form = props => {
const [team, newTeam] = useState({
    name: props.name, 
    email: props.email,
    role: props.role
});

// Make each new object append to the end of the team array and update value based on pairs
const handleChange = event => {
    const newObj = {...team,
        [event.target.name]: event.target.value,
        [event.target.email]: event.target.value,
        [event.target.role]: event.target.value}
    newTeam(newObj)
}

// Handle submission of form, clear form on click
const submitForm = evt => {
    evt.preventDefault()
    props.addNewMember(team)
    newTeam({
        name: "",
        email: "",
        role: ""
    }) // For some reason everything is clearing except the email field...
}

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name: </label>
                    <input 
                    id='name'
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    value={team.name}
                    onChange={handleChange}
                    />
                <br />
                <label htmlFor='email'>Email: </label>
                    <input 
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    name='email'
                    value={team.value}
                    onChange={handleChange}
                    /> 
                <br />
                <label htmlFor='role'>Job Description: </label>
                    <input
                    id='role'
                    type='text'
                    placeholder='What do you do here?'
                    name='role'
                    value={team.role}
                    onChange={handleChange}
                    />
                <br />
                <button type='submit'>Join Our Crew</button>
            </form>
        </div>
    )
}

export default Form