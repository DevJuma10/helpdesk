async function getTicket(id) {
    try {
      const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
          revalidate : 30
        }
      });
      if (!response.ok) {
        console.error(`Network error: ${response.status} - ${response.statusText}`);
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }


export default async function TicketDetails( {params}) {

    const ticket = await getTicket(params.id)

  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
        </div>
    </main>
  )
}
