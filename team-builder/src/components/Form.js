import React, { useState } from 'react'

const Form = props => {

    return (
        <div>
            <form>
                <label htmlFor='name'>Name: </label>
                <input 
                id='name'
                type='text'
                placeholder='Enter your name'
                />
                <br />
                <label htmlFor='email'>Email: </label>
                <input 
                id='email'
                type='email'
                placeholder='Enter your email'
                /> 
                <br />
                <label htmlFor='role'>Job Description: </label>
                <input
                id='role'
                type='text'
                placeholder='What do you do here?'
                />
                <br />
                <button type='submit'>Join Our Crew</button>
            </form>
        </div>
    )
}

export default Form


