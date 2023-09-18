import {notFound} from 'next/navigation'


//Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamicParams = true;


//The generateStaticParams function can be used in combination with 
//dynamic route segments to statically generate routes at build time 
//instead of on-demand at request time
export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets/');

    const tickets = await res.json();

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

export async function generateMetadata ( { params }) {

  const id  = params.id
  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = await res.json()


  return {

    title: `HelpDesk | ${ticket.title}`
  }
    
  
}


async function getTicket(id) {
    try {

      await new Promise((resolve) => {
        setTimeout(resolve, 4000)
      });

      const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
          revalidate : 30
        }
      });
      if (!response.ok) {
        notFound()
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
