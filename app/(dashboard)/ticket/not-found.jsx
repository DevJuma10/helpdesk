import Link from 'next/link'
export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">We Hit a brick wall</h2> 
        <p>We could not find the page you are looking for.</p>
        <p>Go back to the <Link href='/ticket'>Tickets</Link></p>
    </main>
  )
}
