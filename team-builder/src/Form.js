import React from 'react'


export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
    
       const {name, value} = evt.target

       update(name, value)

    }

    const onSubmit = evt => {

        evt.preventDefault()
        submit()
    }

    return (
        <form className = 'form container' onSubmit={onSubmit}>
            <div className = 'formInputs'>
            
                <label>Name
                    <input
                        name='name'
                        type = 'text' 
                        value = {values.name}
                        onChange={onChange}
                        placeholder='Type first name'
                        maxLength = '30'
                        />
                </label>

                <label>email
                    <input name = 'email' 
                    type = 'email'
                    value = {values.email}
                    onChange = {onChange}
                    placeholder = 'name@email.com'/>
                </label>

                <label>role
                    <select name = 'role'
                    value = {values.role}
                    onChange={onChange}
                    >
                        <option value = ''>SELECT ROLE</option>
                        <option value = 'Social Media Lead'> Social Media Lead </option>
                        <option value = 'Marketing Lead'>Marketing Lead</option>
                        <option value = 'Senior Dev Ops'>Senior Dev Ops</option>
                        </select>

                </label>

                <div className = 'submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>


    )


}
