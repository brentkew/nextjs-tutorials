import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <form action="">
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="passwordAgain" placeholder="Enter password again" />
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage