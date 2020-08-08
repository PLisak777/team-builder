import React, { useState } from 'react'

const team = [{
    name: 'Malcolm Reynolds',
    email: 'browncoats4lyfe@xian.ch',
    role: 'Captain'
},
{
    name: 'Hoban Washburn',
    email: 'leafonthewind@wahoo.com',
    role: 'Pilot'
},
{
    name: 'Kaylee Frye',
    email: 'keepflyin@serenity.ship',
    role: 'Mechanic, Cutie-Pie'
}];

const Form = props => {
    const [members, setMembers] = useState({
        name: '',
        email: '',
        role: ''
    })


    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input 
                id='name'
                type='text'
                placeholder='Enter your name'
                />
            </form>
            
        </div>
    )
}

export default Form


