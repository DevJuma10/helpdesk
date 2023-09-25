"use client"

import { useState } from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter()

const [error, setError] = useState("")

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError("")

    const superbase = createClientComponentClient()
    const {error} = await superbase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    if(error){
        setError(error.message)
    }

    if(!error){
      //redirec user
      router.push('/verify')

    }

    console.table('User Sign-up', email, password)
  }

  return (
   <main>
    <h2>SignUp</h2>
    < AuthForm handleSubmit={handleSubmit}/>
    {error && (
      <div className="error">{error}</div>
    )}
   </main>
  )
}
