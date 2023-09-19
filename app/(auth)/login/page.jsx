"use client"
import AuthForm from "../AuthForm";

export default function Login() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.table("User Login",email, password)
  }

  return (
    <main>
        <h2>Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
