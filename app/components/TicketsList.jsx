import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";

/**
 * Fetches ticket data from a specified URL.
 * 
 * @returns {Promise<Array>} The fetched ticket data as an array.
 * @throws {Error} If there is a network error or the response is not ok.
 * 
 * @example
 * const tickets = await getTickets();
 * console.log(tickets);
 */

async function getTickets() {

  const supabase = createServerComponentClient({ cookies })

  const {data , error} = await supabase
    .from('tickets')
    .select()

  if(error) {
    console.log(error.message)
  }

  return data
}


  export default async function TicketsList() {
    try {
      const tickets = await getTickets();
  
      return (
        <>
          {tickets.map((ticket) => (
            <div key={ticket.id} className="card my-5">
              <Link href={`/ticket/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
              </Link>
            </div>
          ))}
          {tickets.length === 0 && (
            <p className="text-center">There are no open tickets</p>
          )}
        </>
      );
    } catch (error) {
      // Handle the error here, e.g., show an error message or log it.
      console.error(error);
    }
  }