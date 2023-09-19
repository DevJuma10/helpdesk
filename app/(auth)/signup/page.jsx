"use client"

import AuthForm from "../AuthForm";

export default function SignUp() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.table('User Sign-up', email, password)
  }

  return (
   <main>
    <h2>SignUp</h2>
    < AuthForm handleSubmit={handleSubmit}/>
   </main>
  )
}
