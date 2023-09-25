import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'


export default async function AuthLayout( { children }) {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect("/")
  }
  return (
    <>
        <nav>
            <h1> <a href="/">HelpDesk</a> </h1>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign-up</Link>
        </nav>

        { children }
    </>
  )
}
