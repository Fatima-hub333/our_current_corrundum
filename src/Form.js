/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const Form = () => {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: ""
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
      <form>
      <input 
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder='Last Name'
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      <input
        name="isFriendly"
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor='isFriendly'>Are You Friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>
          Current Employment Status
        </legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="umemployed"
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor='umemployed'>Un-employed</label> 
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor='part-time'>Part-time</label> 
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />

        <label htmlFor='full-time'>Full-time</label>
      </fieldset>
    </form>
  )
}

export default Form