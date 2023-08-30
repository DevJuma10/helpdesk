import React from 'react'
import TicketsList from '../components/TicketsList'

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
        <h2>TICKETS</h2>
        <p><small>Currently Open Tickets</small></p>
        </div>
      </nav>

      <TicketsList />
    </main>
  )
}

export default Tickets