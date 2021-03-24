import './App.css';
import React, { useState } from 'react';
import Form from './Form'


const initialForm = {
  name: '',
  email: '',
  role: ''
}

export default function App() {



  const [teamMember, setTeamMember] = useState ([]);
  const [formValues, setFormValues] = useState(initialForm);

const updateForm = (inputName, inputValue) =>{

  setFormValues({...formValues, [inputName]: inputValue})

}

const submitForm = () =>{

  const newMember =  {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),
  }
  setTeamMember(teamMember.concat(newMember))

}

console.log(teamMember)
  return (
    <div className="container">
       <h1>My Form</h1>
     <Form values = {formValues}
            update = {updateForm}
            submit = {submitForm}/>
          {teamMember.map((member, idx) =>{
            return(<div key = {idx}>
              <h1>
                Member
              </h1>
              <p>
                {member.name} is a {member.role} and can be contacted at {member.email}
              </p>
            </div>
          )})}
    </div>
  );
}


