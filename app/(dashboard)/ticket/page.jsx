import Link from 'next/link'
import TicketsList from '../../components/TicketsList'
import { Suspense } from 'react'
import Loading from '../loading'

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
        <h2>TICKETS</h2>
        <p><small>Currently Open Tickets</small></p>
        </div>
        <Link href='/ticket/create' className='ml-auto' >
          <button className='btn-primary'>New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={ <Loading /> }> 
        <TicketsList />
      </Suspense>

      
    </main>
  )
}

export default Tickets