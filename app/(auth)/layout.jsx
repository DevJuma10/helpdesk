import Link from "next/link"

export default function AuthLayout( { children }) {
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
